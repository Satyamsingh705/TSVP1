# Import required libraries
import edge_tts  # For text-to-speech conversion using Edge TTS
import asyncio  # For running asynchronous tasks
import pygame  # For playing the generated speech audio
import os  # For file handling operations

# Define an asynchronous function to convert text to speech and play the output
async def text_to_speech_and_play(text):
    output_file = "speech.mp3"  # Define the output file name for the speech audio
    
    try:
        # Step 1: Generate speech from text and save as an MP3 file
        tts = edge_tts.Communicate(text, "en-IN-NeerjaNeural")  # Use Edge TTS with an English voice
        await tts.save(output_file)  # Save the generated speech to 'speech.mp3'

        # Step 2: Ensure the file was actually created before attempting to play it
        if not os.path.exists(output_file):  # Check if the file exists
            raise FileNotFoundError(f"Error: {output_file} was not created.")  # Raise an error if file is missing

        # Step 3: Initialize pygame's mixer module before playing the audio
        pygame.mixer.init()  # Initialize the audio mixer
        pygame.mixer.music.load(output_file)  # Load the generated speech MP3 file
        pygame.mixer.music.play()  # Play the audio file

        # Step 4: Keep the script running until the audio finishes playing
        while pygame.mixer.music.get_busy():  # Check if the music is still playing
            pygame.time.Clock().tick(10)  # Wait for 10ms before checking again

    except Exception as e:
        # Handle any errors that occur during TTS generation or playback
        print(f"Error in TTS: {e}")

    finally:
        # Step 5: Cleanup - Quit pygame mixer when done
        try:
            pygame.mixer.quit()  # Properly close the mixer to free up resources
        except Exception as e:
            print(f"Error in the finally block: {e}")  # Handle any cleanup errors

# Run the function asynchronously
asyncio.run(text_to_speech_and_play("I am doing great sir!"))  # Call the function with a sample text

# StudyPat

Team Name: Ctrl Alt Elite
Members: Dil Gupta, Guruprasad Parasnis, Aditya Kulkarni, Ruchi Kowarkar

This is the AI Assistant StudyPat 
We have made a React.js app here which is our main website. The salient features of the website are as follows:
1. A loginid and password screen for every student
2. An independent student portal where they can access the benefits of StudyPat
3. A page where they can enable/disable the AI tools incorporated in the website

The AI tools used in the project are:
1. Posture Detection system using OpenCV and LogisticRegressionCV
2. Drowsiness detection using Tensorflow.js
3. Autocorrect system using Natural Language Processing
4. Text-to-Speech system using Google TTS pretrained model and PyTorch library. 

## How to run the files

For the Posture Detection model:
1. Run the datacollect.py file. The webcam will open with MediaPipe showing your shoulder joints. This file is for collecting the dataset for training your model. Press "A" for collecting an excellent posture, "B" for an okay posture, "C" for a bad posture and "D" for a terrible posture. Collecting around 300 samples of each will give an optimised model with good accuracy. 
2. Then, run the trainclassifier.py file to train the LogisiticRegressionCV algorithm 
3. Once the model is trained, run the predict_demo.py file to get the prediction based on your training data. The output will give u a live recording along with what kind of posture you are sitting in labelled above you on the webcam
4. Run the predict_notify.py file to see the Windows system giving u a popup for a bad posture. 

For the autocorrect system:
1. Download the notebook and the .txt files attached in the folder. 
2. Run the notebook with the .txt file path specified as per your location and directory
3. Add in random words into the my_autocorrect function as parameter and check for the results. 
4. If your word is a correct grammatical word, it will say "Your word seems correct", if its not a correct word, it will display the nearest possible words that it learnt using Natural Language Processing. 

For the text-to-speech model:
1. We have used the Google TTS pretrained model along with the PyTorch library to run this.
2. Install the two models provided by the github of Tutsugi to your system. 
3. Run the entire model to get the final output. 
4. You can add your own sentences in the dataset too. 

For Drowsiness system:
1. Download the dataset for drowsy and non-drowsy eyes from the website http://mrl.cs.vsb.cz/eyedataset 
2. Then, run the Data_Distribute.ipynb notebook, this will segregate the dataset into open and closed eyes. 
3. We manually create a training and test set in the folder of the project from the above generated segregated folders. 
4. Implement Model_Training.ipynb notebook for 5 epochs ( You can choose any number of epochs you want ) to generate the model. 
5. The alarm.wav file is saved in the same directory. 
6. Run the main_drowsiness.ipynb file to complete the process. You will be able to obtain the webcam output after this file is run. 

To run the React app:
1. Load the entire folder into the IDE
2. Create a project folder for public, src and json files in the root directory. 
3. cd into this directory
4. Then run the following command npm install -g npm-check-updates
5. Then, run ncu -u --packageFile package.json
6. npm install
7. npm start
8. The React app will start on the localhost 3000. 

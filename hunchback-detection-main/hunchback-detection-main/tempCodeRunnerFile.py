import pickle


model_file = 'model.sav'

clf = pickle.load(open(model_file, 'rb'))
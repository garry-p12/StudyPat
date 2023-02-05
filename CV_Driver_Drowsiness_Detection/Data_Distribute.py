#!/usr/bin/env python
# coding: utf-8

# In[1]:


import os
import shutil
import glob
from tqdm import tqdm


# In[2]:


Raw_DIR= r'C:\Users\Aditya Kulkarni\Desktop\Drowsiness\mrlEyes_2018_01\mrlEyes_2018_01'
for dirpath, dirname, filenames in os.walk(Raw_DIR):
    for i in tqdm([f for f in filenames if f.endswith('.png')]):
        if i.split('_')[4]=='0':
            shutil.copy(src=dirpath+'/'+i, dst=r'C:\Users\Aditya Kulkarni\Desktop\Drowsiness\mrlEyes_2018_01\Prepared_Data\Close Eyes')
        
        elif i.split('_')[4]=='1':
            shutil.copy(src=dirpath+'/'+i, dst=r'C:\Users\Aditya Kulkarni\Desktop\Drowsiness\mrlEyes_2018_01\Prepared_Data\Open Eyes')


# In[ ]:





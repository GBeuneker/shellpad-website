---
title: "Waldo Face Detection"
description: "A face detector for where's waldo images, aimed to find Waldo's face."
pubDate: "2017-04-10"
heroImage: "/thereswaldo-thumbnail.jpg"
---

## Description

We used the computer vision OpenCV framework to accomplish this face detector. We trained a Support Vector Model to recognize faces in Where's Waldo images. The image features that are used by the SVM are: color histograms, HOG descriptors and SIFT descriptors. The algorithm uses a sliding window of varying sizes to search for faces in the Where's Waldo image. If the SVM detects a face, the sliding window bounding box is marked.

## Role

Programming: Geert Beuneker.

## Details


**Framework:** OpenCV  
**Language:** C++  
**Link:** [Source Code](https://drive.google.com/uc?export=download&id=0B-BSZRLf8PuDLTRIN2tEV0ppM2s)

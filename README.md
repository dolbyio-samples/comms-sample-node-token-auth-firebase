[![License](https://img.shields.io/github/license/dolbyio-samples/blog-firebase-functions)](LICENSE)

![Blog Picture](https://dolby.io/wp-content/uploads/2021/09/Using-Firebase-Functions-as-a-Conferencing-Authentication-Service.jpg)

# Use Firebase Functions as Authentication Service
This repository will deploy a Firebase Function that will be used to generate an access token to initialize the SDK.

# Overview
In [this blog post](https://dolby.io/blog/using-firebase-functions-as-a-conferencing-authentication-service/), you will learn how to leverage Google Firebase Functions to create a secure authentication service using Node.js (with TypeScript) that can be utilized by the Dolby.io Interactivity API SDKs for Android, iOS, and JavaScript. The focus is on implementing security best practices, and it showcases the Enhanced Conference Access Control feature of Dolby.io, enabling you to configure permissions for users joining conferences.

# Requirements
To start out, you will need access to a [Dolby.io account](https://dolby.io/) to utilize the Communications API, familiarity with Google Firebase, a development environment set up with Node.js and TypeScript, and knowledge of web development + JavaScript. A basic understanding of authentication concepts and practices would be good too. 

# Getting Started 
Install the Firebase Tools on your machine using the following npm command (Node.JS):

```sh 
npm install -g firebase-tools
```

Log the CLI into Firebase:

```sh 
firebase login 
```

Create a folder where you want to have your code and initialize your project with the following command:

```sh 
firebase init
```

You will be asked what you want to set up in this folder, select Functions: Configure and deploy Cloud Functions. If you already have a Firebase project, select Use an existing project. Select the language you want to use to write the Cloud Function. I will provide you the code in TypeScript. Use ESLint to have a clean TypeScript code, then install the dependencies with NPM.

# Report a Bug 
In the case any bugs occur, report it using Github issues, and we will see to it. 

# Forking
We welcome your interest in trying to experiment with our repos.

# Feedback 
If there are any suggestions or if you would like to deliver any positive notes, feel free to open an issue and let us know!

# Learn More
For a deeper dive, we welcome you to review the following:
 - [Communications API](https://docs.dolby.io/communications-apis/docs)
 - [Getting Started with Web SDK](https://docs.dolby.io/communications-apis/docs/getting-started-with-the-javascript-sdk)
 - [How-to Authenticate Users with Auth0 for Secure Dolby.io Video Calls](https://dolby.io/blog/how-to-authenticate-users-with-auth0-for-secure-dolby-io-video-calls/)
 - [What is Bokeh? How-to Add Privacy Filters for WebRTC Video Chat](https://dolby.io/blog/what-is-bokeh-how-to-add-privacy-filters-for-webrtc-video-chat/)
 - [Transcribing Dolby.io Communications Recordings with Deepgram](https://dolby.io/blog/transcribing-dolby-io-communications-recordings-with-deepgram/)

# About Dolby.io
Using decades of Dolby's research in sight and sound technology, Dolby.io provides APIs to integrate real-time streaming, voice & video communications, and file-based media processing into your applications. [Sign up for a free account](https://dashboard.dolby.io/signup/) to get started building the next generation of immersive, interactive, and social apps.

<div align="center">
  <a href="https://dolby.io/" target="_blank"><img src="https://img.shields.io/badge/Dolby.io-0A0A0A?style=for-the-badge&logo=dolby&logoColor=white"/></a>
&nbsp; &nbsp; &nbsp;
  <a href="https://docs.dolby.io/" target="_blank"><img src="https://img.shields.io/badge/Dolby.io-Docs-0A0A0A?style=for-the-badge&logoColor=white"/></a>
&nbsp; &nbsp; &nbsp;
  <a href="https://dolby.io/blog/category/developer/" target="_blank"><img src="https://img.shields.io/badge/Dolby.io-Blog-0A0A0A?style=for-the-badge&logoColor=white"/></a>
</div>

<div align="center">
&nbsp; &nbsp; &nbsp;
  <a href="https://youtube.com/@dolbyio" target="_blank"><img src="https://img.shields.io/badge/YouTube-red?style=flat-square&logo=youtube&logoColor=white" alt="Dolby.io on YouTube"/></a>
&nbsp; &nbsp; &nbsp; 
  <a href="https://twitter.com/dolbyio" target="_blank"><img src="https://img.shields.io/badge/Twitter-blue?style=flat-square&logo=twitter&logoColor=white" alt="Dolby.io on Twitter"/></a>
&nbsp; &nbsp; &nbsp;
  <a href="https://www.linkedin.com/company/dolbyio/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="Dolby.io on LinkedIn"/></a>
</div>

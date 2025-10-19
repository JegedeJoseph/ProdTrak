ProdTrak - Productivity & Task Tracking ApplicationProdTrak is a modern, single-page web application designed to help users manage their daily tasks, monitor their productivity, and facilitate seamless collaboration with supervisors through automated email reports. Built with a focus on operational excellence, it provides a clean, responsive interface for efficient task management.
✨ FeaturesSecure User Authentication: Users can sign up and log in using their email and password. All tasks are private and linked to the user's account.
Comprehensive Task Management: Create, update, and delete tasks with detailed properties including:
Title & Description
Priority Level (High, Medium, Low)
Category (Work, Personal, Study)
Due Date & Time
Deliverable & Assigned By
Real-time Progress Dashboard: A dynamic dashboard that provides an at-a-glance overview of:
Total Tasks
Tasks In Progress
Completed Tasks
Overall Completion Rate
Supervisor Reporting: Users can configure a supervisor's email and send a professionally formatted daily task summary directly from the app.
Three-Step UI Flow: A smooth user journey from authentication to a welcome screen, and finally to the main application.
Real-time Database: Powered by Google Firestore, all tasks are updated instantly across sessions.
🛠️ Tech Stack
This project is built with modern, efficient web technologies:
Frontend: HTML5, Tailwind CSS, JavaScript (ES Modules)
Backend & Database: Google Firebase
Firebase Authentication: For user management.
Cloud Firestore: As the real-time NoSQL database.
Date/Time Utility: Luxon.js for easy date and time formatting.
Build Tool: Tailwind CSS CLI for compiling utility classes.
🚀 Getting StartedTo get a local copy up and running, follow these simple steps.
PrerequisitesYou need to have Node.js and npm installed on your machine to use the Tailwind CSS CLI.Installation & SetupClone the repository:git clone [https://github.com/your-username/prodtrak.git](https://github.com/your-username/prodtrak.git)
cd prodtrak
bInstall Tailwind CSS:npm install
Set up your Firebase Project:Create a new project at the Firebase Console.Create a new Web App within your Firebase project.Copy the firebaseConfig object provided by Firebase.In the index.html file, find the placeholder firebaseConfig object and replace it with your own keys.// In index.html, inside the <script type="module"> tag
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
In the Firebase Console, go to Authentication > Sign-in method and enable the Email/Password provider.Go to Firestore Database, create a database, and update the Rules to secure your data (see the rule example below).Configure Firestore Security Rules:In your Firestore Rules tab, paste the following to ensure users can only access their own data:rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tasks/{taskId} {
      allow read, write, update, delete: if request.auth.uid == resource.data.userId;
      allow create: if request.auth.uid == request.resource.data.userId;
    }
  }
}
Run the Tailwind CSS build process:This command will watch for changes in your files and automatically generate the required CSS.npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
Open index.html in your browser and the application should be running locally!📄 LicenseDistributed under the MIT License. See LICENSE for more information.
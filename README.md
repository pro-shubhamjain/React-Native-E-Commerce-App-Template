<h1>React Native is an E-Commerce App Template</h1>
<p>
React Native is an E-Commerce App Template which can work for Android and iOs, compatible with Expo. Create a clean & clear design style. You can use the interface for projects or small shops.
</p>
<br/>
<p>
React Native E-Commerce is a free theme ideal for apps on  electronics similar ones. <br/>
It has layout that provides clean, stylish look on both Android and iOS devices. Also it has customized subpages. <br/>
The theme comes up with well structured layer, bright and simple look with the aim to provide amazing experience to the users.
</p>

<h3>Feature</h3>
<ul>
<li>In this app implementation of flex architecture through react-redux.</li>
<li>For local storage use redux persists.</li>
<li>For Navigation throught the app use react-navigation v7.</li>
<li>For UI, plain React Native components styled with StyleSheet.</li>
<li>Built on Expo SDK 57.</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
<li>Node.js 20 or newer (LTS recommended)</li>
<li>npm (comes with Node.js)</li>
<li>The <a href="https://expo.dev/go">Expo Go</a> app on your phone (easiest way to run it), or Android Studio / Xcode if you want a simulator</li>
</ul>

<h3>Install</h3>
<pre>
git clone &lt;this-repo-url&gt;
cd React-Native-E-Commerce-App-Template
npm install
</pre>

<h3>Run</h3>
<pre>
npm start
</pre>
<p>
This starts the Expo dev server and prints a QR code in the terminal. Scan it with the Expo Go app (Android: use the app's built-in scanner; iOS: scan it with the Camera app) to open the project on your phone. Your phone and computer need to be on the same Wi-Fi network.
</p>

<p>Other ways to run it, once the dev server is started (or directly via these commands):</p>
<pre>
npm run android   # open in an Android emulator / connected device
npm run ios       # open in an iOS simulator (macOS only)
npm run web       # open in a browser
</pre>

<h3>Seeing the app work right away</h3>
<p>
On the Login screen, tap <b>Continue as Demo User</b>. It logs you in instantly with no network call at all, so it works even if you haven't set up any backend yet. Use this first to confirm the app itself is working.
</p>

<h3>Backend (login / register / account)</h3>
<p>
The Login, Register, and Account screens also support real login/register against a REST API: <code>/users/login</code>, <code>/users/register</code>, <code>/users/current</code>, and <code>/users/test</code>. This repo includes a minimal mock server in <code>server/</code> that implements those four endpoints in memory.
</p>
<pre>
cd server
npm install
npm start
</pre>
<p>
Leave that running in its own terminal, then start the app as usual (<code>npm start</code> from the project root). A demo account is seeded automatically:
</p>
<ul>
<li>Email: <code>demo@example.com</code></li>
<li>Password: <code>demo123</code></li>
</ul>
<p>
The app automatically points at the dev machine's own address (derived from the Expo dev server), so this works whether you're running in a simulator, the web preview, or on a physical phone via Expo Go, as long as the phone and computer are on the same network. If login still fails with the mock server running, check that terminal's output for incoming request logs — if nothing shows up when you tap Sign In, the app isn't reaching the server (usually a network/firewall issue), rather than a login/password problem.
</p>
<p>
The mock server's data is in-memory only and resets whenever you restart it. When you're ready for a real backend, replace it with your own server exposing the same four routes, or point <code>getApiBaseUrl()</code> in <code>src/routing.js</code> at wherever it lives.
</p>
<h3>React Native as platform:</h3>
<p>
Once you code using React Native there is no reason to select any other platform because in the current date React Native is considered as the fastest growing mobile app development trend. Being a semi hybrid mobile framework, it offers superior architecture and standard level components to use. Also it gives stable look to the apps maintaining high quality bar.
<br/>
The benefit React Native offers is auto-updation during the changes made in the platform, great speed, sophisticated threading model and also the developers can access the platform specific UI components. Also it offers better development experience with faster loading rate without following any compilation step.
</p>

<h3>Why React Native E-Commerce Starter?</h3>
<ul>
<li>Single JavaScript code base for both iOS & Android.</li>
<li>Enormous set of UI Elements.</li>
<li>Customizable widgets.</li>
<li>Readily available screens.</li>
<li>Hassle free routing similar to web.</li>
</ul>



import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Backendless"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/backendless-cloned-da66078.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Backendless Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 48, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Backendless is a Visual Application Development Platform. With Backendless you can streamline the process of developing highly scalable mobile and web applications by using our universal backend system and very intuitive UI development interface.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Object Created</div>
  <div>Triggers when a new object is created in the chosen table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Object Removed</div>
  <div>Triggers when an object is removed from the chosen table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Object Updated</div>
  <div>Triggers when an object is updated in the selected table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Logged In</div>
  <div>Triggers when a registered user logs in to your Backendless app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Registered</div>
  <div>Triggers when a new user registers in your app.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Save New Object</div>
  <div>Saves a new object in the database in the chosen data table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Object</div>
  <div>Deletes an object from a specified table by object ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register User</div>
  <div>Registers a new user in your Backendless app. This creates a new user record in Users data table</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Sends an email from your custom templates. To manage email templates login to Backendless Console and navigate to Messaging &gt; Emails and then select "Create new template" in the Templates dropdown</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Push Notification</div>
  <div>Sends a push notification from a push notification template. To manage your Push Notifications templates, login to Backendless Console, and navigate to Messaging &gt; Push Notifications.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Object</div>
  <div>Updates an object in a specified data table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Object</div>
  <div>Run a query to the database to retrieve objects.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Finds a User in the database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Object</div>
  <div>Run a query to the database to retrieve objects.</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Backendless</title>
        </>
      ),
    },
  };
}

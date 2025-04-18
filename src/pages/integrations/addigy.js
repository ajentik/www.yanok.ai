import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Addigy"
      description="Addigy provides a simple, yet powerful way to manage all your Apple IT infrastructure."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/addigy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Addigy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(55, 132, 132, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Addigy provides a simple, yet powerful way to manage all your Apple IT infrastructure.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Devices</div>
  <div>List of Devices in the Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File-Upload URL Generator</div>
  <div>Generates a URL that is needed to upload the file and expires after a certain amount of time. NOTE: For this API endpoint the API tokens are sent through the headers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Alerts</div>
  <div>Lists received alerts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Custom Software</div>
  <div>Returns all Custom Software created by the organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Applications</div>
  <div>Get map of installed applications per device.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Command Output</div>
  <div>Get output of a command. This endpoint accepts parameters in JSON format.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Policies</div>
  <div>Get list of policies for the organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Policy Details</div>
  <div>List deployed instructions details in policy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Policy Devices</div>
  <div>List devices in policy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Profiles</div>
  <div>Get list of profiles for the organization. If instruction_id is passed as GET parameter, returns only that instruction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Public Software</div>
  <div>Returns a list of all public software items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Specific Custom Software Versions</div>
  <div>Get a specific version of a custom software</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Specific Custom Software With All Versions</div>
  <div>Get a specific custom software with all versions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Last Device Location</div>
  <div>After running Lost Mode Request Location, get Lost Mode Location can be run to display the last known location of the device.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Available Updates From Request</div>
  <div>Will return a list of known available updates returned to Addigy from the device. For macOS, Request macOS Update Scan must be run first to run a Software Update check. Once that check is finished, Request Updates from Device can be sent to store available updates within Addigy. Both required prior to running this command. For iOS / tvOS, Request Updates from Device required to be run first.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Certificate</div>
  <div>Returns a list of certificates that are installed on the device that have been reported back from the Request Certificate List command.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Update Status</div>
  <div>Returns the data given from the device to Addigy for viewing the status of updates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Users</div>
  <div>Returns a list of known users that were given to Addigy via the Request User List command.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Maintenance</div>
  <div>List maintenance done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Online Devices</div>
  <div>Get devices currently online for the organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Policy Instructions</div>
  <div>List instructions in policy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">System Event (Oldest Events)</div>
  <div>Triggers, when a Dashboard &gt; Events call, is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">System Event (Newest Events)</div>
  <div>Triggers, when a Dashboard &gt; Events call, is made.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Device to a Policy</div>
  <div>Add device to a policy. If device already in a policy the policy will be overridden.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Software</div>
  <div>Creates a custom software item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Policy</div>
  <div>Create a policy in the organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>This command allows the server to delete a user that has an active account on the device. With iOS it is available in Education Mode only; with macOS it requires DEP enrollment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Disable Lost Mode</div>
  <div>This command allows the server to take the device out of MDM lost mode.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Disable Remote Desktop</div>
  <div>Disables Remote Desktop on macOS. Available on macOS 10.14.4 or newer.</div>
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
          <title>Addigy</title>
          <meta name="description" content="Addigy provides a simple, yet powerful way to manage all your Apple IT infrastructure." />
        </>
      ),
    },
  };
}

import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Merci facteur Pro"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/merci-facteur-pro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Merci facteur Pro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(144, 114, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Send mail using La Poste! With us you can also send postcards, pictures, registered packages and much more!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>WARNING ! This operation cannot be undone. It won\'t delete the user\'s adress\' or letters, they will stille be available on your Merci Facteur Pro account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Address Details</div>
  <div>Returns the details of an address from it\'s ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Shipment Mails</div>
  <div>Returns the list of mails in a precised shipment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Mail Price</div>
  <div>Returns the price of a mail depending on specified parameters. (not needed to send a mail)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Account Quota Details</div>
  <div>Returns the number of shipment still available for an account this month.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Shipment Tracking</div>
  <div>Returns the tracking and the state of mails in a precised shipment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Id</div>
  <div>Get the ID of a user using it\'s email adress. You can use this function less if you store your IDs locally.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Addresses</div>
  <div>Returns the list of addresses on your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Shipments</div>
  <div>Returns a list of the last 50 shipments of a defined user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Errors</div>
  <div>Get the list of error the API can return</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Open Support Ticket</div>
  <div>Opens a Support Ticket. We\'ll be pleased to help you !</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Mail</div>
  <div>WARNING ! This operation generates a mail which will be deducted from your account\'s quota, printed and posted. If you\'re running tests, please contact us to cancel your mail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Publipostage</div>
  <div>Last step for the process of sending Publipostage using Merci Facteur Pro</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Publipostage (One Step)</div>
  <div>Send a publipostage on one step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New User</div>
  <div>Creates a new user. You\'ll generally only need one, the one created with your Merci Facteur Pro account. (see the "Utilisateurs" tab when connected on the website).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Source Publipostage</div>
  <div>Second step of the three steps required to send a Publipostage using Merci Facteur Pro</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Template Publipostage</div>
  <div>First of the three steps required to send a Publipostage using Merci Facteur Pro</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User Details</div>
  <div>Updates a user\'s details</div>
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
          <title>Merci facteur Pro</title>
        </>
      ),
    },
  };
}

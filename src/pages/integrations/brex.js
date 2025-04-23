import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Brex"
      description={`Handle your company’s deposits, payments, credit cards, spend management, and accounting in one place. Brex makes it refreshingly easy to see how your money’s being used and control how it’s spent.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/brex.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Brex Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 255, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Handle your company’s deposits, payments, credit cards, spend management, and accounting in one place. Brex makes it refreshingly easy to see how your money’s being used and control how it’s spent.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Pending Card Transactions</div>
  <div>Triggers when a card has pending transactions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transfer Failed</div>
  <div>Triggers when a transfer has failed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transfer Processed</div>
  <div>Triggers when an incoming or outgoing transfer has been processed</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>Creates a card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Vendor</div>
  <div>Creates a Vendor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Department</div>
  <div>Creates a Department</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Disable User</div>
  <div>Disables a User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Card Details</div>
  <div>Lets you send an email with a secure link to get card details (card number, exp, cvc).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set User Limit</div>
  <div>Sets the limit for user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Cash Accounts</div>
  <div>Lists all the existing cash accounts with their status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Creates a Location</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Transfer</div>
  <div>Creates a new transfer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates a User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Vendor by Name</div>
  <div>Updates a Vendor matching provided name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card Number</div>
  <div>Retrieves card number, CVV, and expiration date of a card by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card Transactions</div>
  <div>List Brex Card transactions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Cash Transactions</div>
  <div>List Brex Cash transactions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Department by Name</div>
  <div>Finds a Department by Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Email</div>
  <div>Finds a User by Email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location by Name</div>
  <div>Finds a Location by Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Vendor by Name</div>
  <div>Finds a vendor based on name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Department</div>
  <div>Searches or creates Departments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Location</div>
  <div>Searches or creates Location.</div>
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
          <title>Brex</title>
          <meta name="description" content={`Handle your company’s deposits, payments, credit cards, spend management, and accounting in one place. Brex makes it refreshingly easy to see how your money’s being used and control how it’s spent.`} />
        </>
      ),
    },
  };
}

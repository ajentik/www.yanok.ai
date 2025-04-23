import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TotalBrokerage"
      description={`The only complete Real Estate Brokerage software solution from contact through closing.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/totalbrokerage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TotalBrokerage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(112, 123, 135, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The only complete Real Estate Brokerage software solution from contact through closing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Account Created</div>
  <div>Triggers when a new account is created in your brokerage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Enabled/Disabled</div>
  <div>Triggers when an account in your brokerage is enabled or disabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Updated</div>
  <div>Triggers when an account in your brokerage is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Action Plan Activity</div>
  <div>Triggers when one of the following occurs: 1) An Action Plan is added to a Contact. 2) An Action Plan is paused or resumed for a Contact. 3) An Action Plan is completed for a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Action Plan Task Completed</div>
  <div>Triggers when an account completes a task in an Action Plan for a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created for your brokerage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact General Information Updated</div>
  <div>Triggers when the information in the General Tab for a Contact has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contacts Imported</div>
  <div>Triggers when contacts are mass imported into the CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Trashed/Untrashed</div>
  <div>Triggers when a contact is added to or removed from the trash.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Commissions Locked</div>
  <div>Triggers when commissions are locked for a transaction. When commissions are locked, the Commission tab is no longer editable.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Commissions Unlocked</div>
  <div>Triggers when commissions are unlocked for a transaction. When commissions are unlocked, information in the Commission tab can be modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Created</div>
  <div>Triggers when a new transaction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Date Added</div>
  <div>Triggers when a new date is added to a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Date Updated</div>
  <div>Triggers when an existing date on a transaction is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Date Removed</div>
  <div>Triggers when a date is removed from a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Documents Shared for Transaction</div>
  <div>Triggers when documents are shared for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Share Viewed</div>
  <div>Triggers when the recipient of shared documents for a transaction reviews the documents.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Earnest Money Added</div>
  <div>Triggers when a new earnest money entry is added to a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Earnest Money Updated</div>
  <div>Triggers when an existing earnest money entry in a transaction is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Earnest Money Removed</div>
  <div>Triggers when an earnest money entry is removed from a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Received for Transaction</div>
  <div>Triggers when an email is received for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Financials Updated</div>
  <div>Triggers when the financial information for a transaction is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction General Information Updated</div>
  <div>Triggers when the information in the General Tab for a Transaction has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Added to Transaction</div>
  <div>Triggers when a new person or slot is added to a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Person Updated</div>
  <div>Triggers when the person at a specific slot in a transaction\'s People tab is cleared or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Removed From Transaction</div>
  <div>Triggers when a person or slot is removed from a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Property Updated</div>
  <div>Triggers when the property information for a transaction is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Signature Request Updates</div>
  <div>Triggers when signatures are requested for a transaction, when documents in a signature request are viewed or signed by the signer, and when a signature request is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Status Updated</div>
  <div>Triggers when the status of a transaction is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Activity to Contact</div>
  <div>Add a new activity to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Activity to Transaction</div>
  <div>Add a new activity to a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Contact</div>
  <div>Adds the specified tag(s) to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Create an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a contact in your TotalBrokerage CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags From Contact</div>
  <div>Remove the specified tag(s) from a contact, if they exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Tags on Contact</div>
  <div>Set the specified tag(s) on a contact. Any tags that currently exist for the contact will be replaced.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Update an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enable/Disable Account</div>
  <div>Enable or disable an account in your brokerage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find the most recent contact matching the specified search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Account</div>
  <div>Retrieve an account by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact</div>
  <div>Retrieve a contact by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact Tags</div>
  <div>Get all the tags associated with the specified contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction</div>
  <div>Retrieve the general information for a transaction by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction Commissions</div>
  <div>Retrieve all the commission information for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction Dates</div>
  <div>Retrieve all the dates for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction Earnest Money</div>
  <div>Retrieve the earnest money information for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction Financials</div>
  <div>Retrieve all the financial information for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction People</div>
  <div>Gets all the contacts, vendors, and accounts listed in the People tab of a Transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction Property</div>
  <div>Retrieves the property information for a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Vendor</div>
  <div>Retrieve a vendor by ID.</div>
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
          <title>TotalBrokerage</title>
          <meta name="description" content={`The only complete Real Estate Brokerage software solution from contact through closing.`} />
        </>
      ),
    },
  };
}

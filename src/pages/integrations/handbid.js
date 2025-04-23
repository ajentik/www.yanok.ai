import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Handbid"
      description={`Handbid is an online mobile bidding and fundraising platform for charity and commercial auctions and events. Setup an auction or fundraiser in Handbid and allow users to bid or donate through the Handbid apps for iPhone, Android, and web.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/handbid.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Handbid Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(105, 74, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Handbid is an online mobile bidding and fundraising platform for charity and commercial auctions and events. Setup an auction or fundraiser in Handbid and allow users to bid or donate through the Handbid apps for iPhone, Android, and web.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Auction or Event Created</div>
  <div>Triggers when a new auction, peer to peer fundraiser or campaign is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Auction Status Changed</div>
  <div>Triggers when the auction status was changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Auction Timer</div>
  <div>Triggers when an auction is scheduled to close.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Auction Settings Updated</div>
  <div>Triggers when an auction settings is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Exception</div>
  <div>Triggers when some errors occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Guest Added</div>
  <div>Triggers when a new Guest is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Checkin</div>
  <div>Triggers when a member of your Guest List is Checked-in. Works for Auctions, Peer-to-Peer, and Campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Invited</div>
  <div>Triggers when a guest is invited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Register</div>
  <div>Triggers when a Guest is register.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when an INVOICE is first generated. Invoices are generated based on your initial winning of an auction item(s) or a purchase.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase</div>
  <div>Triggers when a purchase is made for an Auction item, Ticket, ForSale Item, or Appeal / Donation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Paddle Assigned</div>
  <div>Triggers when a new user paddle id is generated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Alert</div>
  <div>Create alert for handbid manager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Alert</div>
  <div>This action helps find alerts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Alert</div>
  <div>Update alert for handbid manager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Auction</div>
  <div>Creates a new auction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Auction</div>
  <div>Update the auction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Auctions</div>
  <div>This action helps find auctions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Auction Financials</div>
  <div>Get Auction Financials</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Guest</div>
  <div>Creates a guest in the guest list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Guest</div>
  <div>This will register a new guest provided a Guest GUID is passed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates a new Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates a new Organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization</div>
  <div>Updates an existing organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item</div>
  <div>Updates an Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>This action will create a new user account in Handbid</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update a user\'s information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Organization</div>
  <div>Finds an existing Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Organization</div>
  <div>Finds an existing Organization</div>
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
          <title>Handbid</title>
          <meta name="description" content={`Handbid is an online mobile bidding and fundraising platform for charity and commercial auctions and events. Setup an auction or fundraiser in Handbid and allow users to bid or donate through the Handbid apps for iPhone, Android, and web.`} />
        </>
      ),
    },
  };
}

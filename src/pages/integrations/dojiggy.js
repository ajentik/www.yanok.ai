import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DoJiggy"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dojiggy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DoJiggy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(217, 115, 51, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Donor-Friendly Fundraising Platform for Nonprofits and Schools that Empowers Organizations to Raise More for Less.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activity Results Added</div>
  <div>Triggers when Activity Results are added to any of an Organization’s campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A-Thon Pledge Submitted</div>
  <div>Triggers when a Transaction is made that contains A-Thon Pledges (per-unit or flat donation).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Auction Bid Submitted</div>
  <div>Triggers when a transaction is made containing auction bids.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Auction Winners Determined</div>
  <div>Triggers when the winner’s list is completely populated on any auction in the organization’s account. In other words, when the auction is finished processing and the winner’s list is totally populated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Ends</div>
  <div>Triggers when a campaign’s status changes to Ended, Completed, or Processing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Crowdfunding Perk Purchased</div>
  <div>Triggers when a transaction is made that contains Crowdfunding Perks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Ticket Purchased</div>
  <div>Triggers when a transaction is made that includes Event tickets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Donation Question Submitted via Contact Organizer</div>
  <div>Triggers when Someone submits a question via the “Contact Organizer” function on the Campaign Page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Added to Campaign</div>
  <div>Triggers when Participants (Team Members) are added to any of an Organization’s campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Raffle Entry Purchased</div>
  <div>Triggers when a Transaction is made that contains Raffle Tickets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Raffle Winners Determined</div>
  <div>Triggers when the winner drawing process is completed on any raffle under this organization’s account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recurring Donation Made</div>
  <div>Triggers when a recurring payment is made on a Campaign, which includes the first recurrence as well as any subsequent recurrences.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Item Purchased</div>
  <div>Triggers when a transaction is made that contains sale items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Added to a Campaign</div>
  <div>Triggers when Teams are added to any of an Organization’s Campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Made</div>
  <div>Triggers when a new transaction is submitted on your Campaign, whether through Checkout or through Campaign Management.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Posted on Campaign</div>
  <div>Triggers when an update is posted on one of the Organization’s Campaigns.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>DoJiggy</title>
        </>
      ),
    },
  };
}

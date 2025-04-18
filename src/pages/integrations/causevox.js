import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CauseVox"
      description="CauseVox is a digital fundraising platform for nonprofits and social good projects. Increase fundraising results with our donation forms, crowdfunding campaigns, peer to peer fundraising, event ticketing, and pledge donations."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/causevox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CauseVox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(113, 113, 225, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CauseVox is a digital fundraising platform for nonprofits and social good projects. Increase fundraising results with our donation forms, crowdfunding campaigns, peer to peer fundraising, event ticketing, and pledge donations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Donation</div>
  <div>Triggers when a new donation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Installment</div>
  <div>Triggers when a new installment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Installment Profile</div>
  <div>Triggers when a new installment profile is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Personal Page</div>
  <div>Triggers when a new personal page is created. This data may be incomplete as a fundraiser might not completely fill out their information on signup, so please use it in conjunction with the update trigger to receive full data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recurring Profile</div>
  <div>Triggers when a new recurring profile is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Page</div>
  <div>Triggers when a team page is created. This data may be incomplete as a team might not completely fill out their information on signup, so please use it in conjunction with the update trigger to receive full data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket Order</div>
  <div>Triggers when a new ticket order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Personal Page</div>
  <div>Triggers when a personal page page is updated, aggregate information is updated (new donation that increases total, etc) or a team is joined/left. Please use it in conjunction with the create personal page trigger to receive full data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Team Page</div>
  <div>Triggers when a team page is updated or aggregate information is updated (new donation that increases total, etc) . Please use it in conjunction with the create team page trigger to receive full data.</div>
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
          <title>CauseVox</title>
          <meta name="description" content="CauseVox is a digital fundraising platform for nonprofits and social good projects. Increase fundraising results with our donation forms, crowdfunding campaigns, peer to peer fundraising, event ticketing, and pledge donations." />
        </>
      ),
    },
  };
}

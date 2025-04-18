import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PassKit Membership"
      description="PassKit Membership lets you manage your membership programs and passes for Apple Wallet and Google Pay"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/passkit-membership.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PassKit Membership Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(88, 81, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PassKit Membership lets you manage your membership programs and passes for Apple Wallet and Google Pay</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Enrollment</div>
  <div>Triggers when a new member enrols into a membership program.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Burn Points</div>
  <div>Burns points for a member (identified by PassKit ID or External ID). Deducts the amounts provided.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Tier</div>
  <div>Change a members tier (identified by PassKit ID or External ID).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check-In Member</div>
  <div>Checks in a member by either internal PassKit ID or External ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check-Out Member</div>
  <div>Checks out a member by either internal PassKit ID or External ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Member</div>
  <div>Deletes member by either internal PassKit ID or External ID. The membership pass will lose a barcode after member deletion.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Earn Points</div>
  <div>Earns points for a member (identified by PassKit ID or External ID). Adds the amounts provided.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enrol Member</div>
  <div>Adds a member to your program and issue a membership pass.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Points</div>
  <div>Sets points for a member (identified by PassKit ID or External ID). Updates the point balance with the amounts provided.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Expiry Date</div>
  <div>Updates expiry of a single member.</div>
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
          <title>PassKit Membership</title>
          <meta name="description" content="PassKit Membership lets you manage your membership programs and passes for Apple Wallet and Google Pay" />
        </>
      ),
    },
  };
}

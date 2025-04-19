import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Paid Memberships Pro"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/paid-memberships-pro-wordpress-p.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Paid Memberships Pro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 151, 200, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PMPro plugin helps you start, manage, & grow a membership site on WordPress. Protect content, register users, & accept recurring payments.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Membership Level Changed</div>
  <div>Triggers when a user\'s membership level changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Added or Updated</div>
  <div>Triggers when a new order is added or updated in Paid Memberships Pro.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Membership Level Object</div>
  <div>Use this action to create a new membership level object in your Paid Memberships Pro site.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel a User\'s Membership Level</div>
  <div>Use this action to cancel a user\'s membership level.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change a User\'s Membership Level</div>
  <div>Use this action to change or cancel a user\'s membership level.</div>
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
          <title>Paid Memberships Pro</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

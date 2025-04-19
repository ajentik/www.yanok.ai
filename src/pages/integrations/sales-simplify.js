import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sales Simplify"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sales-simplify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sales Simplify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 107, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">An all-in-one sales automation and engagement platform with built-in CRM and cloud communication channels.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company added in the system</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when new deal is closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when new lead is added in the system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New People</div>
  <div>Triggers when there is new people added in the system</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Company</div>
  <div>Adds new company into the SalesSimplify system</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal</div>
  <div>This creates a new deal in the system</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Lead</div>
  <div>This adds lead into the salessimplify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add People</div>
  <div>Adds people into the SalesSimplify system.</div>
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
          <title>Sales Simplify</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

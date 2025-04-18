import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dance Studio Pro"
      description="Dance Studio Pro is the world's best dance studio software"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dance-studio-pro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dance Studio Pro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(25, 132, 210, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dance Studio Pro is the world\'s best dance studio software</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Class Added</div>
  <div>Triggers when a student adds a class.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Dropped</div>
  <div>Triggers when a student drops a class.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Non-Revenue Credit</div>
  <div>Triggers when a non-revenue credit is posted to a student account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Debit</div>
  <div>Triggers when a new debit is posted to a student account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Parent</div>
  <div>Triggers when a new parent is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is logged for a student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Refund</div>
  <div>Triggers when a new refund is logged on a student journal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Student</div>
  <div>Triggers when a new student is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Classes</div>
  <div>Triggers when classes are selected and sent (pushed to Zapier) from Dance Studio Pro.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Leads</div>
  <div>Triggers when leads are selected and sent (pushed to Zapier) from Dance Studio Pro.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Parents</div>
  <div>Triggers when parents are selected and sent (pushed to Zapier) from Dance Studio Pro.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Students</div>
  <div>Triggers when students are selected and sent (pushed to Zapier) from Dance Studio Pro.</div>
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
          <title>Dance Studio Pro</title>
          <meta name="description" content="Dance Studio Pro is the world's best dance studio software" />
        </>
      ),
    },
  };
}

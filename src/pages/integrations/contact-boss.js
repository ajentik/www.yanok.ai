import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Contact Boss"
      description={`Contact Boss is one of your best options for client management software, offering a better way to track your clients. Contact Boss is the best client management software for Small to Medium Size Businesses, Entrepreneurs, Volunteer or Service Organizations etc.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/contact-boss.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Contact Boss Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(218, 61, 42, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Contact Boss is one of your best options for client management software, offering a better way to track your clients. Contact Boss is the best client management software for Small to Medium Size Businesses, Entrepreneurs, Volunteer or Service Organizations etc.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event for Google Calendar, Outlook Calendar is triggered/created for contact in Contact Boss.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Contact</div>
  <div>Triggers when there\'s a new contact create request is submitted.</div>
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
          <title>Contact Boss</title>
          <meta name="description" content={`Contact Boss is one of your best options for client management software, offering a better way to track your clients. Contact Boss is the best client management software for Small to Medium Size Businesses, Entrepreneurs, Volunteer or Service Organizations etc.`} />
        </>
      ),
    },
  };
}

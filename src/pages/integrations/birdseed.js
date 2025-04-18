import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BirdSeed"
      description="BirdSeed is an all-in-one website sales center with 12 powerful tools including live chat, meeting scheduling, FAQ, testimonials and more."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/birdseed.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BirdSeed Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(64, 204, 121, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BirdSeed is an all-in-one website sales center with 12 powerful tools including live chat, meeting scheduling, FAQ, testimonials and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Call Request</div>
  <div>Triggers when a customer requests a phone call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Chat Transcript</div>
  <div>Triggers when the transcript of a completed chat session is ready.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scheduled Meeting</div>
  <div>Triggers when a customer schedules a meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Capture</div>
  <div>Triggers when a new customer email is captured.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Form</div>
  <div>Triggers when a customer submits a new contact form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Live Chat Request</div>
  <div>Triggers when a customer starts a new live chat session.</div>
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
          <title>BirdSeed</title>
          <meta name="description" content="BirdSeed is an all-in-one website sales center with 12 powerful tools including live chat, meeting scheduling, FAQ, testimonials and more." />
        </>
      ),
    },
  };
}

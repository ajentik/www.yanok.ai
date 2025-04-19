import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Apenday"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/apenday.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Apenday Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 161, 96, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Apenday creates a unique, highly customizable booking experience. The interface adapts to your visual identity (logo, colors) for perfect integration on all your devices (website, email, SMS, etc.).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Cancelled</div>
  <div>Triggers when an appointment is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Confirmed</div>
  <div>Triggers when an appointment is confirmed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Missed</div>
  <div>Triggers when an appointment is missed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Satisfaction Surveil Submitted</div>
  <div>Triggers when user respond to satisfaction survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Terminated</div>
  <div>Triggers when an appointment is terminated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Updated</div>
  <div>Triggers when an appointment is updated.</div>
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
          <title>Apenday</title>
        </>
      ),
    },
  };
}

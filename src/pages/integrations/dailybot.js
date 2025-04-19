import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DailyBot"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dailybot.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DailyBot Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 116, 228, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DailyBot is your team\'s daily assistant. Put your stand-up meetings, status reports and check-ins on cruise control, save time and increase productivity.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Kudos Given</div>
  <div>Triggers every time that any Kudos are given to someone in your DailyBot organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Check-In Response Completed</div>
  <div>Triggers when a response is added to a check-in in DailyBot by any user from your organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Response Completed</div>
  <div>Triggers when a new response is added to a form in Dailybot by any user from your organization or external user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Check-In Response Completed (Deprecated)</div>
  <div>Triggers when a response is added to a check-in in DailyBot by any user from your organization.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Give Kudos</div>
  <div>It gives kudos to one or several users in DailyBot.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>It sends a DailyBot Message to one or several users, or to a group of people (via channel or room).</div>
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
          <title>DailyBot</title>
          <meta name="description" content={}/>s daily assistant. Put your stand-up meetings, status reports and check-ins on cruise control, save time and increase productivity.' />
        </>
      ),
    },
  };
}

import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CalendarHero"
      description="CalendarHero is the smarter, faster way to schedule all of your meetings"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zoomai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CalendarHero Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(4, 122, 184, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CalendarHero is the smarter, faster way to schedule all of your meetings</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Completed</div>
  <div>Triggers after the Meeting is complete</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Request Cancelled</div>
  <div>Triggers when a meeting request was cancelled by the requesting user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Request Expired</div>
  <div>Triggers when a meeting request expires (the requested attendees do not accept it before the end timeframe).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Request Success</div>
  <div>Triggers when a meeting request is successfully turned into a meeting event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Started</div>
  <div>Triggers when a Meeting is about to start</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Added</div>
  <div>Triggered when a new contact is added through any of your personal scheduling links.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting Request</div>
  <div>Triggers when a new meeting request is created by you.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Meeting Request</div>
  <div>Create a meeting request with one or more contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact Insights</div>
  <div>Find a specific contact\'s detailed information (including Insights; job history, personality, social media links, tweets, photos, ...).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Meeting Type Details</div>
  <div>Find the details of a specific meeting type (and the scheduling link).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contacts</div>
  <div>Returns a list of contacts that match the search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Returns a list of contacts that match the search criteria.</div>
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
          <title>CalendarHero</title>
          <meta name="description" content="CalendarHero is the smarter, faster way to schedule all of your meetings" />
        </>
      ),
    },
  };
}

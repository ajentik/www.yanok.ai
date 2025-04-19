import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="24sessions"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/24sessions.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        24sessions Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 108, 199, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">24sessions helps you to connect with customers via video-chat effortlessly. We make this work by combining scheduling, video-chat and reviews all in a white labeled platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Canceled</div>
  <div>Triggers when meeting is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting</div>
  <div>Triggers when you schedule a meeting (via schedule page) or get booked by a guest (via booking forms).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when you receive a new booking by a guest (via booking forms).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting Created by User</div>
  <div>Triggers when a new meeting is created by 24sessions user (via schedule page).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Updated</div>
  <div>Triggers when meeting is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Review</div>
  <div>Triggers when a new review added.</div>
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
          <title>24sessions</title>
        </>
      ),
    },
  };
}

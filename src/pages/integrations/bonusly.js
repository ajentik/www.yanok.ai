import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bonusly"
      description="Bonusly is a fun, personal recognition and rewards program that enriches your company culture, improves employee engagement, and celebrates your core values. With Bonusly, everyone in your organization can publicly recognize everyone else by giving small bonuses that add up to meaningful rewards."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bonusly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bonusly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(51, 204, 102, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bonusly is a fun, personal recognition and rewards program that enriches your company culture, improves employee engagement, and celebrates your core values. With Bonusly, everyone in your organization can publicly recognize everyone else by giving small bonuses that add up to meaningful rewards.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Achievement</div>
  <div>Triggers when an achievement is earned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bonus</div>
  <div>Triggers when a bonus is given.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Give Bonus</div>
  <div>Recognize a colleague by giving them a bonus.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Give Bonus From Text (Advanced)</div>
  <div>Recognize a colleague by giving them a bonus. You must specify the entire bonus reason in a text field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a user by their name or email.</div>
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
          <title>Bonusly</title>
          <meta name="description" content="Bonusly is a fun, personal recognition and rewards program that enriches your company culture, improves employee engagement, and celebrates your core values. With Bonusly, everyone in your organization can publicly recognize everyone else by giving small bonuses that add up to meaningful rewards." />
        </>
      ),
    },
  };
}

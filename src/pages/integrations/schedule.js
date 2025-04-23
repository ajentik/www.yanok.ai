import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Schedule by Zapier"
      description={`Schedule is a native Zapier app you can use for recurring tasks. Trigger an action every day of the month, every day of the week or every single day. You can also select the hour of the day. If you're a developer, this is similar to a crontab, cronjob or cron.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/schedule.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Schedule by Zapier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(252, 28, 116, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Schedule is a native Zapier app you can use for recurring tasks. Trigger an action every day of the month, every day of the week or every single day. You can also select the hour of the day. If you\'re a developer, this is similar to a crontab, cronjob or cron.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Every Day</div>
  <div>Triggers every day, just choose at what hour of time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Every Hour</div>
  <div>Triggers every hour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Every Month</div>
  <div>Triggers every month, just choose what day of the month.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Every Week</div>
  <div>Triggers every week, just choose what day of the week.</div>
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
          <title>Schedule by Zapier</title>
          <meta name="description" content={`Schedule is a native Zapier app you can use for recurring tasks. Trigger an action every day of the month, every day of the week or every single day. You can also select the hour of the day. If you're a developer, this is similar to a crontab, cronjob or cron.`} />
        </>
      ),
    },
  };
}

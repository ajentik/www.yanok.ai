import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zapier Manager"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zapier-manager.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zapier Manager Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bolster your Zap housekeeping with Zapier Manager. Track Zap errors, invite members to your Team, and more!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Public App</div>
  <div>Triggers whenever a new public app is added to Zapier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Halted Task</div>
  <div>Triggers when a task in your account is halted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when your Zapier account receives a new invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when a new folder appears in your personal/team account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Zap</div>
  <div>Triggers when a new Zap in your account is created and turned on.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Zap Turned Off</div>
  <div>Triggers when a Zap in your account is paused or turned off.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Usage Limit Reached</div>
  <div>Triggers when your task usage hits a specified percentage or number of your plan\'s included tasks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Member</div>
  <div>Triggers when a new team member is added to your account. This trigger is only available for Zapier for Teams account users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Zap Error</div>
  <div>Triggers when a Zap in your account encounters an error.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Team Invitation</div>
  <div>Invite a member to your Zapier team. This action is only available to Zapier for Teams users</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Turn Zap On/Off</div>
  <div>Turn a Zap on or off.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Zap Report (Beta)</div>
  <div>Automatically generate a CSV and aggregate metrics describing the task history of a single Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find App</div>
  <div>Searches for a public App on Zapier</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Zap</div>
  <div>Searches for a Zap in your account.</div>
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
          <title>Zapier Manager</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

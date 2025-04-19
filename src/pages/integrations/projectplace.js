import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ProjectPlace"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/projectplace.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ProjectPlace Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(165, 168, 174, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ProjectPlace is a smart project collaboration solution that brings teams together to improve collaboration and get things done.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activities</div>
  <div>Lists the activities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Assignments</div>
  <div>List user assignments on cards.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cards Past Due Date</div>
  <div>List project\'s cards past due date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workspaces I Am Member Of</div>
  <div>Lists workspaces to which you have access.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Templates</div>
  <div>List an account\'s templates for workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Boards</div>
  <div>Lists boards.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Events</div>
  <div>Gets card\'s related changes using webhook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Documents</div>
  <div>Lists documents.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Issues</div>
  <div>Lists issues.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Milestones</div>
  <div>Lists milestones.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workspace Members</div>
  <div>Lists workspace members.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Risks</div>
  <div>Lists risks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Reports</div>
  <div>Lists time reports.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workspaces in Enterprise Account</div>
  <div>Lists projects in the enterprise account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Board</div>
  <div>Creates a new board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card on Board</div>
  <div>Creates a new card on a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card on Activity</div>
  <div>Creates a new card on an activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Issue</div>
  <div>Creates a new issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Milestone</div>
  <div>Creates a new milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Card</div>
  <div>Moves card to other board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Members to Project</div>
  <div>Sends workspace invitations to users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Risk</div>
  <div>Creates a new risk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Report</div>
  <div>Creates a new time report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card</div>
  <div>Updates existing card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card\'s Activity</div>
  <div>Updates card\'s activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Workspace</div>
  <div>Creates a new workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Cards</div>
  <div>Finds a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Card</div>
  <div>Finds a card.</div>
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
          <title>ProjectPlace</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

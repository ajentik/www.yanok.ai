import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RoboRecruiter Application"
      description="RoboRecruiter is a messaging chatbot for recruitment. Reach 1 to 10's of thousands of your candidates instantly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/roborecruiter-application.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RoboRecruiter Application Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(136, 195, 86, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RoboRecruiter is a messaging chatbot for recruitment. Reach 1 to 10\'s of thousands of your candidates instantly</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">List of Campaigns</div>
  <div>Triggers when a new campaign is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Candidates From a Campaign</div>
  <div>Triggers when a new Candidate takes an action on the campaign. You have many options that you can pick from the process the candidate. You can refer to our API to see what your options would be:</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List All Updated Candidates</div>
  <div>Triggers when a candidate responds to any campaign within the organization.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Edit a Candidate</div>
  <div>This will edit a Candidate based on specifying a field name and the profile ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Relaunch a Campaign to a Set of Candidate ID\'s</div>
  <div>This will Relaunch a campaign to a set of Candidate ID\'s</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All the Email and SMS Unsubscribes</div>
  <div>Go out and get all the unsubscribes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Candidates to RoboRecruiter</div>
  <div>This will upload people to RoboRecruiter. One you have uploaded it will return a list of Profile_ID\'s. You can use those ID\'s to send the person to a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Candidate From ID</div>
  <div>This will return a candidate details when you pass it an id</div>
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
          <title>RoboRecruiter Application</title>
          <meta name="description" content="RoboRecruiter is a messaging chatbot for recruitment. Reach 1 to 10's of thousands of your candidates instantly" />
        </>
      ),
    },
  };
}

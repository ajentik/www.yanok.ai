import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Lobbytrack"
      description={`Lobbytrack visitor management software is used for registering visitors in corporate lobbies, government facilities, hospital visits, and schools.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/lobbytrack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Lobbytrack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(30, 82, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Lobbytrack visitor management software is used for registering visitors in corporate lobbies, government facilities, hospital visits, and schools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Employee Signed In</div>
  <div>Triggers when an employee signs in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Signed Out</div>
  <div>Triggers when an employee signs out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Employee</div>
  <div>Triggers when an employee / host is added or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Visit</div>
  <div>Triggers when a visit is added or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Visitor</div>
  <div>Triggers when a visitor is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visitor Signed In</div>
  <div>Triggers when a visitor signs in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visitor Signed Out</div>
  <div>Triggers when a visitor signs out.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Employee</div>
  <div>Adds a new employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Visitor</div>
  <div>Adds a new visitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Employee</div>
  <div>Retrieves the details for an employee / host.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Location</div>
  <div>Retrieves the details of a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Visit</div>
  <div>Retrieves the details for a visit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Visitor</div>
  <div>Retrieves the details for a visitor.</div>
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
          <title>Lobbytrack</title>
          <meta name="description" content={`Lobbytrack visitor management software is used for registering visitors in corporate lobbies, government facilities, hospital visits, and schools.`} />
        </>
      ),
    },
  };
}

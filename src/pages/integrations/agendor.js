import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Agendor"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/agendor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Agendor Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(46, 64, 84, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Agendor is a sales improvement platform with web and mobile version designed for Brazilian companies with long sales cycles.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task (Tarefa/Comentário) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new Deal (Negócio) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Lost</div>
  <div>Triggers when a Deal (Negócio) is set as lost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Stage Changed</div>
  <div>Triggers when a Deal (Negócio) moves to another stage (Etapa) in the pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal</div>
  <div>Triggers when a Deal (Negócio) is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Won</div>
  <div>Triggers when a Deal (Negócio) is set as won.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new Organization (Empresa) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Organization</div>
  <div>Triggers when an Organization (Empresa) is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new Person (Pessoa) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when a Person (Pessoa) is edited.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task (Tarefa/Comentário).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal Stage</div>
  <div>Updates a Deal Stage (Mover Negócio de Etapa).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal Status</div>
  <div>Updates a Deal Status (Atualizar Status de um Negócio).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal Basic Data</div>
  <div>Updates a Deal (Negócio).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization</div>
  <div>Updates a Organization (Empresa).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Organization</div>
  <div>Creates or updates an Organization (Empresa).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Updates a Person (Pessoa).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Person</div>
  <div>Creates or updates a Person (Pessoa).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal</div>
  <div>Finds a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organization</div>
  <div>Finds an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Deal</div>
  <div>Finds or Creates a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Finds or Creates an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Finds or Creates a person.</div>
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
          <title>Agendor</title>
        </>
      ),
    },
  };
}

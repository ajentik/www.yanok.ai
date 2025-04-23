import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Quanto"
      description={`Quanto Link enables users to share their financial data in exchange for better financial products`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quanto.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Quanto Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(69, 99, 217, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Quanto Link enables users to share their financial data in exchange for better financial products</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Account Statement</div>
  <div>Fetch a account balance / statement for the specified account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Credit Cards</div>
  <div>Fetch user Credit Cards</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Credit Card Statements</div>
  <div>Fetch user Credit Card Statements</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Credit Card Transactions</div>
  <div>Fetch user Credit Card Transactions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Credit Limits</div>
  <div>Fetch user Credit Limits</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch User Investments</div>
  <div>Fetch user Investments</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Investments Transactions</div>
  <div>Fetch Investments Transactions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch User Analytics Cash Flow Data</div>
  <div>Fetch user analytics cash flow data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch KYC Data</div>
  <div>Fetch user "Know Your Customer" data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch User Receipts</div>
  <div>Fetch user receipt</div>
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
          <title>Quanto</title>
          <meta name="description" content={`Quanto Link enables users to share their financial data in exchange for better financial products`} />
        </>
      ),
    },
  };
}

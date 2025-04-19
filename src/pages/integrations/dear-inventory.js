import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DEAR Inventory"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dear-inventory.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DEAR Inventory Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DEAR is an all in one holistic solution for Inventory Management, POS & B2B eCommerce. Easily manage all your inventory, purchases, sales, suppliers and customers in one easy to use system.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer / Updated Customer</div>
  <div>Triggered when customers are created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product / Updated Product</div>
  <div>Triggered when products are created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase / Updated Purchase</div>
  <div>Triggered when purchases are created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Additional Info Added</div>
  <div>Triggers when an additional information is added to a sale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Attachment Added</div>
  <div>Triggers when an attachment is added to a sale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Voided/Undone</div>
  <div>Triggers when a sale is voided or undone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Credit Note Authorised</div>
  <div>Triggers when a sales credit note authorised.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Fulfilment Update</div>
  <div>Triggers when a sale\'s fulfilment status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Invoice Authorised</div>
  <div>Triggers when a sales invoice authorised.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a payment is added to a sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Shipment Tracking Number Changed</div>
  <div>Triggers when a sale\'s shipment tracking number changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Status Change</div>
  <div>Triggers when a sales status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stock Level Update</div>
  <div>Triggered when a change is made to product availability.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier / Updated Supplier</div>
  <div>Triggered when suppliers are created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Sale Attachment.</div>
  <div>Adds attachment to sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Sale Pack</div>
  <div>Adds pack to sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Sale Payment</div>
  <div>Adds payment to sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sale</div>
  <div>Creates a new sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Sale Shipment</div>
  <div>Adds shipment to sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Stock Adjustment</div>
  <div>Creates a stock adjustment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Stock Transfer</div>
  <div>Creates a stock transfer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Supplier</div>
  <div>Creates a new supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates the product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sale</div>
  <div>Updates a sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier</div>
  <div>Updates a supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Assembly</div>
  <div>Search for assembly by status, sale id or other fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer</div>
  <div>Search for customer by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sale Payments</div>
  <div>Search for sale payments by sale id, order number, invoice number, credit note number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Products Availability</div>
  <div>Search for products availability.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Product</div>
  <div>Search for product by name or sku.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sale Credit Note</div>
  <div>Search for sale credit note by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sale Fulfilment</div>
  <div>Search for sale fulfilment by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sale Invoice</div>
  <div>Search for sale invoice by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sale</div>
  <div>Search for sale by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sale Extended</div>
  <div>Search for sale by order number, status, customer, invoice number, customer reference, credit note number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create DEAR customer if it doesn\'t exist yet?</div>
  <div>Create DEAR customer if it doesn\'t exist yet?</div>
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
          <title>DEAR Inventory</title>
        </>
      ),
    },
  };
}

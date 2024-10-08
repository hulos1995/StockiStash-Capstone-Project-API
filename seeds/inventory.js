/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("inventory").del();
  await knex("inventory").insert([
    {
      id: 1,
      item_name: "Emery Strip",
      description: "Sticky strips used for polishing mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/emery_strip.png",
      quantity: 1000,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=10",
      user_id: 2,
    },
    {
      id: 2,
      item_name: "Bench Roll",
      description: "Bench roll used for polishing mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/bench-roll.png",
      quantity: 50,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=68",
      user_id: 2,
    },
    {
      id: 3,
      item_name: "Air Grinder",
      description: "Used for removing light stock",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/air-grinder.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=177",
      user_id: 3,
    },
    {
      id: 4,
      item_name: "AM8 Hard Stone",
      description: "Hard stone used for roughing. DRY",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/AM8-HardStone.png",
      quantity: 100,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=65",
      user_id: 2,
    },
    {
      id: 5,
      item_name: "Carbide Burrs",
      description: "Mainly used for removing heavy stock",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/carbide-burrs.png",
      quantity: 50,
      status: "In Stock",
      link: "https://dmscomponents.com/Carbide-Burs-3-32-Miniatures/CB-3-32-Miniatures",
      user_id: 2,
    },
    {
      id: 6,
      item_name: "Cut-Off Wheels",
      description: "Used for cutting materials",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/cut-off-wheels.png",
      quantity: 1000,
      status: "In Stock",
      link: "https://dmscomponents.com/Products/Polishing-Tools/Mandrels-Wheels/",
      user_id: 2,
    },
    {
      id: 7,
      item_name: "Di Profiler",
      description: "Profiling tool for details work.",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/di-profiler.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=168",
      user_id: 2,
    },
    {
      id: 8,
      item_name: "Felt Bobs",
      description: "Used for polishing and finishing",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/felt-bobs.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=327",
      user_id: 2,
    },
    {
      id: 9,
      item_name: "Felt High Polish",
      description: "High polish felt for final finishing",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/felt-highpolish.png",
      quantity: 100,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=136",
      user_id: 2,
    },
    {
      id: 10,
      item_name: "Felt Sheets",
      description: "Sheets of felt for various uses",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/felt-sheets.png",
      quantity: 50,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=260",
      user_id: 2,
    },
    {
      id: 11,
      item_name: "Foot Pedal",
      description: "Foot pedal for controlling handheld tools",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/foot-pedal.png",
      quantity: 30,
      status: "In Stock",
      link: "https://dmscomponents.com/Speed-Control/12375",
      user_id: 2,
    },
    {
      id: 12,
      item_name: "Hard Maple Wood",
      description: "Hard maple wood for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/hard_maplewood.png",
      quantity: 20,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=111",
      user_id: 2,
    },
    {
      id: 13,
      item_name: "Mandrels",
      description: "Mandrels for holding cut off wheels",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/mandrels.png",
      quantity: 75,
      status: "In Stock",
      link: "https://dmscomponents.com/Products/Polishing-Tools/Mandrels-Wheels/",
      user_id: 3,
    },
    {
      id: 14,
      item_name: "Inner Shafts",
      description: "Inner shafts to put at end of motor",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/inner-shafts.png",
      quantity: 10,
      status: "In Stock",
      link: "https://dmscomponents.com/Flexible-Shafts-Inner/12675",
      user_id: 2,
    },
    {
      id: 15,
      item_name: "Motor",
      description: "Motor for controlling handheld tools",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/motor.png",
      quantity: 5,
      status: "In Stock",
      link: "https://dmscomponents.com/DUMORE-Series-6-Super-Flex/6-021",
      user_id: 2,
    },
    {
      id: 16,
      item_name: "Mounted Points",
      description: "Mounted points for precision grinding",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/mounted-points.png",
      quantity: 200,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=190",
      user_id: 3,
    },
    {
      id: 17,
      item_name: "Oil",
      description: "Oil used for wet stones",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/oil.png",
      quantity: 5,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=127",
      user_id: 2,
    },
    {
      id: 18,
      item_name: "Polishing Brush (Small)",
      description: "Small polishing brush",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/polishing-brush-small.png",
      quantity: 60,
      status: "In Stock",
      link: "https://dmscomponents.com/Products/Polishing-Tools/Polishing-Brushes/",
      user_id: 2,
    },
    {
      id: 19,
      item_name: "Polishing Brush",
      description: "Polishing brush for high polishing",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/polishing-brush.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://dmscomponents.com/Products/Polishing-Tools/Polishing-Brushes/",
      user_id: 2,
    },
    {
      id: 20,
      item_name: "Power Lock Holder",
      description: "Holder to hold power lock, use with caution",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/power-lock.png",
      quantity: 7,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=94",
      user_id: 3,
    },
    {
      id: 21,
      item_name: "PSA Emery",
      description: "PSA emery for removing cutter marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/psa-emery.png",
      quantity: 300,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=96",
      user_id: 2,
    },
    {
      id: 22,
      item_name: "Right Angle Hand Tool",
      description: "Handheld right angle, use with care.",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/right-angle-handtool.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=319",
      user_id: 2,
    },
    {
      id: 23,
      item_name: "Stone Holder",
      description: "Holder for stones, such as T2, T4 and AM8",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/stone-holder.png",
      quantity: 100,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=38",
      user_id: 2,
    },
    {
      id: 24,
      item_name: "Super Stone",
      description: "Super stone for detail works, DRY",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/super-stone.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=300",
      user_id: 2,
    },
    {
      id: 25,
      item_name: "T2 Wet Stone",
      description: "T2 wet stone for polishing, WET",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T2-WetStone.png",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=65",
      user_id: 2,
    },
    {
      id: 26,
      item_name: "T4 Wet Stone",
      description: "Finer than T2, T4 wet stone, WET",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T4-WetStone.png",
      quantity: 100,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=65",
      user_id: 2,
    },
    {
      id: 27,
      item_name: "Ultralap 70",
      description: "Ultralap 70 use only with super stone.",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/ultralap-70.png",
      quantity: 50,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 2,
    },
    {
      id: 28,
      item_name: "Rubbers",
      description: "Used with bench roll",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/rubber.jpg",
      quantity: 12,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 2,
    },
    {
      id: 29,
      item_name: "Right Angle",
      description: "High Speed right angle, wear safety glass",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/right-angle.jpg",
      quantity: 0,
      status: "Out of Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 3,
    },
    {
      id: 30,
      item_name: "Puller",
      description: "Used for pulling fitting components out",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/puller.jpg",
      quantity: 5,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 3,
    },
    {
      id: 31,
      item_name: "Lead",
      description: "Lead used for measureing stock on press",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/lead.jpg",
      quantity: 50,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 3,
    },
    {
      id: 32,
      item_name: "High spot blue",
      description: "Blue use for spotting components",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/highspotblue.jpg",
      quantity: 50,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 3,
    },
    {
      id: 33,
      item_name: "High speed grinder",
      description: "Very fast, Wear safety glass",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/highspeedgrinder.jpg",
      quantity: 3,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 3,
    },
    {
      id: 34,
      item_name: "Blade",
      description: "Handman baldes use with emery strips",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/blades.jpg",
      quantity: 100,
      status: "In Stock",
      link: "https://www.moldshoptools.com/catalog/list.php?category_id=166",
      user_id: 2,
    },
  ]);
}

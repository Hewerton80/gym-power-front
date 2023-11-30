import prisma from "@/lib/prisma";
// import  from '@prisma/client'
const muscles = [
  {
    id: "clofv3s2f0000r1vk2f5i5j6p",
    name: "Bíceps",
    //   "exercises": [
    //     {
    //       "muscleId": "clofv3s2f0000r1vk2f5i5j6p",
    //       "id": "clog488db000008jgb615868l",
    //       "name": "Rosca bíceps direta com barra W",
    //       "image": "rosca-biceps-direta-na-barra-ez.png"
    //     },
    //     {
    //       "muscleId": "clofv3s2f0000r1vk2f5i5j6p",
    //       "id": "clog48con000108jg573s6iwx",
    //       "name": "Rosca bíceps direta com halteres",
    //       "image": "rosca-biceps-direta-com-halteres.png"
    //     },
    //     {
    //       "muscleId": "clofv3s2f0000r1vk2f5i5j6p",
    //       "id": "clog48fxk000208jgbild5khg",
    //       "name": "Rosca bíceps martelo em pé com halteres",
    //       "image": "rosca-biceps-martelo-com-halteres.png"
    //     },
    //     {
    //       "muscleId": "clofv3s2f0000r1vk2f5i5j6p",
    //       "id": "clog48k4b000308jgb6wm1xe6",
    //       "name": "Rosca bíceps com halteres no banco inclinado",
    //       "image": "rosca-biceps-com-halteres-no-banco-inclinado.png"
    //     },
    //     {
    //       "muscleId": "clofv3s2f0000r1vk2f5i5j6p",
    //       "id": "clog48rj7000408jgcpsvhuyo",
    //       "name": "Rosca bíceps apoiado no banco Scott e com a barra EZ",
    //       "image": "rosca-biceps-no-banco-scott-com-barra-w.png"
    //     },
    //     {
    //       "muscleId": "clofv3s2f0000r1vk2f5i5j6p",
    //       "id": "clog4drhq000m08jg5mku2ytr",
    //       "name": "Rosca bíceps no cabo e usando a corda",
    //       "image": "rosca-biceps-no-cabo.png"
    //     }
    //   ]
  },
  {
    id: "clofv45km0001r1vk3c3dm2zo",
    name: "Tríceps",
    exercises: [
      {
        muscleId: "clofv45km0001r1vk3c3dm2zo",
        id: "clog47uqc000408js8ehsae1o",
        name: "Tríceps na máquina",
        image: "triceps-maquina.png",
      },
      {
        muscleId: "clofv45km0001r1vk3c3dm2zo",
        id: "clog47zmu000508jsge6z6hpb",
        name: "Tríceps na polia alta com barra reta",
        image: "triceps-puxada-no-pulley-com-barra.png",
      },
      {
        muscleId: "clofv45km0001r1vk3c3dm2zo",
        id: "clog483nc000608js7j8a0hrt",
        name: "Tríceps na polia alta com corda",
        image: "triceps-puxada-no-pulley-com-corda.png",
      },
    ],
  },
  {
    id: "clofv4dkt0002r1vkcxet1ykf",
    name: "Lombares",
    exercises: [],
  },
  {
    id: "clofv4mmi0003r1vkhwu5ima7",
    name: "Oblícos",
    exercises: [],
  },
  {
    id: "clofv4uey0004r1vkfr37ji9g",
    name: "Peitoral",
    exercises: [
      {
        muscleId: "clofv4uey0004r1vkfr37ji9g",
        id: "clog28i1i000308l35nwg374w",
        name: "Supino reto com barra",
        image: "supino-reto-com-barra.png",
      },
      {
        muscleId: "clofv4uey0004r1vkfr37ji9g",
        id: "clog47ek8000008js7opo3jj0",
        name: "Supino reto com halteres",
        image: "supino-reto-com-halteres.png",
      },
      {
        muscleId: "clofv4uey0004r1vkfr37ji9g",
        id: "clog47hro000108js3k3w2tlv",
        name: "Supino inclinado com barra",
        image: "supino-inclinado-com-barra.png",
      },
      {
        muscleId: "clofv4uey0004r1vkfr37ji9g",
        id: "clog47lf7000208js9ejjgkmt",
        name: "Supino inclinado com halteres",
        image: "supino-inclinado-com-halteres.png",
      },
      {
        muscleId: "clofv4uey0004r1vkfr37ji9g",
        id: "clog47q3v000308jsa3ny6m7o",
        name: "Crucifixo no voador (Peck deck)",
        image: "cruxifixo-no-voador-no-peck-deck.png",
      },
    ],
  },
  {
    id: "clofv53gm0005r1vkicr6wzj0",
    name: "Antebraços",
    exercises: [],
  },
  {
    id: "clofv5bb20006r1vktqszwn7w",
    name: "Ombros",
    exercises: [
      {
        muscleId: "clofv5bb20006r1vktqszwn7w",
        id: "clog491e3000508jgbit6ciq7",
        name: "Desenvolvimento de ombros com halteres",
        image: "desenvolvimento-para-ombros-com-halteres.png",
      },
      {
        muscleId: "clofv5bb20006r1vktqszwn7w",
        id: "clog49760000608jg2ndme7zq",
        name: "Elevação lateral de ombros com halteres",
        image: "ombros-elevacao-lateral-de-ombros-com-halteres.png",
      },
      {
        muscleId: "clofv5bb20006r1vktqszwn7w",
        id: "clog49io0000708jg3tyc6qrw",
        name: "Voador invertido na máquina",
        image: "ombros-voador-invertido-na-maquina.png",
      },
    ],
  },
  {
    id: "clofv5hqb0007r1vkcl2zcymq",
    name: "Trapézio",
    exercises: [],
  },
  {
    id: "clofv5s9m0008r1vk4c6gfknb",
    name: "Dorsais",
    exercises: [
      {
        muscleId: "clofv5s9m0008r1vk4c6gfknb",
        id: "clog49nye000808jg75cnhtph",
        name: "Remada curvada com barra e pegada pronada",
        image: "costas-remada-curvada-barra.png",
      },
      {
        muscleId: "clofv5s9m0008r1vk4c6gfknb",
        id: "clog4a1ay000908jg2b8th6p3",
        name: "Remada unilateral com halter (remada serrote)",
        image: "costas-remada-unilateral-com-halter-serrote-no-banco.png",
      },
      {
        muscleId: "clofv5s9m0008r1vk4c6gfknb",
        id: "clog4a6m6000a08jg7lk6guwa",
        name: "Puxada com barra no pulley",
        image: "costas-puxada-aberta-com-barra-no-pulley-1.png",
      },
      {
        muscleId: "clofv5s9m0008r1vk4c6gfknb",
        id: "clog4abv7000b08jg4chphw1a",
        name: "Remada na máquina de cabos",
        image: "remada-sentado-com-cabos-e-triangulo-para-costas.png",
      },
    ],
  },
  {
    id: "clofv6clf0009r1vkoo60z8jl",
    name: "Abdômen",
    exercises: [],
  },
  {
    id: "clofv6jrb000ar1vkc92ei4j8",
    name: "Glúteos",
    exercises: [],
  },
  {
    id: "clofv6srd000br1vk96etv2gr",
    name: "Isquiotibiais",
    exercises: [
      {
        muscleId: "clofv6srd000br1vk96etv2gr",
        id: "clog4bsu5000h08jg898fai03",
        name: "Levantamento Stiff",
        image: "pernas-levantamento-stiff-com-halteres.png",
      },
      {
        muscleId: "clofv6srd000br1vk96etv2gr",
        id: "clog4bx6j000i08jgdtd16n4v",
        name: "Mesa flexora",
        image: "pernas-flexao-de-pernas-na-maquina.png",
      },
    ],
  },
  {
    id: "clofv6z03000cr1vkwefj1zte",
    name: "Abdutores",
    exercises: [
      {
        muscleId: "clofv6z03000cr1vkwefj1zte",
        id: "clog4bpdf000g08jgd5ya91z1",
        name: "Abdução de pernas na máquina",
        image: "pernas-abducao-de-pernas-na-maquina.png",
      },
      {
        muscleId: "clofv6z03000cr1vkwefj1zte",
        id: "clog4c5jm000j08jgdfa53z0z",
        name: "Adução de pernas na máquina",
        image: "pernas-aducao-de-pernas-na-maquina.png",
      },
    ],
  },
  {
    id: "clofv76be000dr1vk0l56mril",
    name: "Quadríceps",
    exercises: [
      {
        muscleId: "clofv76be000dr1vk0l56mril",
        id: "clog4ahem000c08jgchbshds8",
        name: "Agachamento no rack",
        image: "agachamento-no-rack.png",
      },
      {
        muscleId: "clofv76be000dr1vk0l56mril",
        id: "clog4amw4000d08jg5rbp0ukw",
        name: "Leg press 45º",
        image: "pernas-leg-press-45-tradicional.png",
      },
      {
        muscleId: "clofv76be000dr1vk0l56mril",
        id: "clog4aroz000e08jg14p88nph",
        name: "Agachamento na máquina Smith",
        image: "agachamento-no-smith.png",
      },
      {
        muscleId: "clofv76be000dr1vk0l56mril",
        id: "clog4bi5i000f08jg5uz939jh",
        name: "Extensão de pernas",
        image: "pernas-extensao-de-pernas-na-maquina.png",
      },
    ],
  },
  {
    id: "clofv7ebq000er1vkduk9d45b",
    name: "Adutores",
    exercises: [],
  },
  {
    id: "clofv7r9s000fr1vkax3egkj7",
    name: "Panturrilha",
    exercises: [
      {
        muscleId: "clofv7r9s000fr1vkax3egkj7",
        id: "clog4ca43000k08jg34o9da37",
        name: "Elevação de panturrilha em pé no aparelho",
        image: "panturrilha-em-pe-no-aparelho.png",
      },
      {
        muscleId: "clofv7r9s000fr1vkax3egkj7",
        id: "clog4cezk000l08jg2mqbetco",
        name: "Elevação de panturrilha no leg press",
        image: "panturrilha-no-leg-press.png",
      },
    ],
  },
  {
    id: "clofv7ulr000gr1vkla864zb5",
    name: "Cardio",
    exercises: [],
  },
];

async function main() {
  //   prisma.muscle.createMany({
  //     data: [{}],
  //   });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

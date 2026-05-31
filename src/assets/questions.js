export const questions = [
  {
    id: "q1",
    questionKey: "quiz.q1.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q1.answers.female",
        meta: {
          gender: "femenino",
        },
      },
      {
        id: "b",
        textKey: "quiz.q1.answers.male",
        meta: {
          gender: "masculino",
        },
      },
      {
        id: "c",
        textKey: "quiz.q1.answers.other",
        meta: {
          gender: "otro",
        },
      },
    ],
  },
  {
    id: "q2",
    questionKey: "quiz.q2.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q2.answers.hetero",
        meta: {
          sexuality: "hetero",
        },
      },
      {
        id: "b",
        textKey: "quiz.q2.answers.homo",
        meta: {
          sexuality: "homo",
        },
      },
      {
        id: "c",
        textKey: "quiz.q2.answers.bi",
        meta: {
          sexuality: "bi",
        },
      },
      {
        id: "d",
        textKey: "quiz.q2.answers.asexual",
        meta: {
          sexuality: "asexual",
        },
      },
    ],
  },
  {
    id: "q3",
    questionKey: "quiz.q3.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q3.answers.introvertido",
        tags: {
          introvertido: 3,
          evitativo: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q3.answers.extrovertido",
        tags: {
          extrovertido: 3,
          aventurero: 1,
          expresivo: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q3.answers.ambivertido",
        tags: {
          ambivertido: 2,
          adaptable: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q4",
    questionKey: "quiz.q4.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q4.answers.responsable",
        tags: {
          responsable: 3,
          racional: 1,
          estricto: 2,
          directo: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q4.answers.irresponsable",
        tags: {
          procrastinador: 3,
          estable: 2,
          caotico: 1,
          evitativo: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q4.answers.medio",
        tags: {
          pragmatico: 2,
          adaptable: 1,
          responsable: 1,
          estable: 2,
        },
      },
    ],
  },
  {
    id: "q5",
    questionKey: "quiz.q5.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q5.answers.caos",
        tags: {
          caotico: 3,
          aventurero: 2,
          emocional: 1,
          procrastinador: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q5.answers.rutina",
        tags: {
          estable: 3,
          responsable: 2,
          racional: 1,
          estricto: 3,
        },
      },
      {
        id: "c",
        textKey: "quiz.q5.answers.medio",
        tags: {
          estable: 1,
          adaptable: 2,
          ambivertido: 1,
          responsable: 1,
        },
      },
    ],
  },
  {
    id: "q6",
    questionKey: "quiz.q6.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q6.answers.si",
        tags: {
          contacto_fisico: 3,
          caotico: 1,
          romantico: 3,
          directo: 1,
          expresivo: 2,
        },
      },
      {
        id: "b",
        textKey: "quiz.q6.answers.medio",
        tags: {
          introvertido: 1,
          romantico: 1,
          adaptable: 1,
          estricto: 1,
          contacto_fisico: 2,
          sutil: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q6.answers.no",
        tags: {
          introvertido: 3,
          estricto: 3,
          evitativo: 1,
        },
      },
    ],
  },
  {
    id: "q7",
    questionKey: "quiz.q7.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q7.answers.romantico",
        tags: {
          romantico: 3,
          emocional: 1,
          expresivo: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q7.answers.pragmatico",
        tags: {
          pragmatico: 3,
          introvertido: 1,
          estable: 1,
          racional: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q7.answers.medio",
        tags: {
          adaptable: 2,
          romantico: 1,
          pragmatico: 1,
        },
      },
    ],
  },
  {
    id: "q8",
    questionKey: "quiz.q8.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q8.answers.emocional",
        tags: {
          emocional: 3,
          caotico: 1,
          romantico: 2,
          expresivo: 1,
          empatico: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q8.answers.racional",
        tags: {
          racional: 3,
          responsable: 1,
          estricto: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q9",
    questionKey: "quiz.q9.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q9.answers.educado",
        tags: {
          educado: 3,
          sutil: 1,
          extrovertido: 1,
          responsable: 1,
          estable: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q9.answers.maleducado",
        tags: {
          directo: 1,
          caotico: 1,
          hater: 3,
        },
      },
      {
        id: "c",
        textKey: "quiz.q9.answers.medio",
        tags: {
          adaptable: 2,
          ambiguo: 1,
          pragmatico: 1,
          aventurero: 1,
          resolutivo: 1,
          inteligente: 1,
        },
      },
    ],
  },
  {
    id: "q10",
    questionKey: "quiz.q10.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q10.answers.flexible",
        tags: {
          adaptable: 3,
          resolutivo: 1,
          empatico: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q10.answers.estricto",
        tags: {
          estricto: 3,
          responsable: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q11",
    questionKey: "quiz.q11.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q11.answers.evitativo",
        tags: {
          evitativo: 3,
          introvertido: 2,
          caotico: 1,
          sutil: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q11.answers.resolutivo",
        tags: {
          resolutivo: 3,
          directo: 1,
          adaptable: 1,
          racional: 2,
          expresivo: 1,
        },
      },
    ],
  },
  {
    id: "q12",
    questionKey: "quiz.q12.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q12.answers.explicito",
        tags: {
          directo: 3,
          romantico: 1,
          expresivo: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q12.answers.sutil",
        tags: {
          sutil: 3,
          introvertido: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q13",
    questionKey: "quiz.q13.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q13.answers.lento",
        tags: {
          racional: 2,
          resolutivo: 3,
        },
      },
      {
        id: "b",
        textKey: "quiz.q13.answers.rapido",
        tags: {
          emocional: 2,
          expresivo: 2,
        },
      },
      {
        id: "c",
        textKey: "quiz.q13.answers.no",
        tags: {
          evitativo: 3,
          introvertido: 1,
        },
      },
    ],
  },
  {
    id: "q14",
    questionKey: "quiz.q14.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q14.answers.listo",
        tags: {
          inteligente: 3,
          racional: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q14.answers.tonto",
        tags: {
          caotico: 2,
          hater: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q14.answers.medio",
        tags: {
          inteligente: 1,
          caotico: 1,
        },
      },
    ],
  },
  {
    id: "q15",
    questionKey: "quiz.q15.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q15.answers.bueno",
        tags: {
          empatico: 2,
          resolutivo: 1,
          educado: 2,
        },
      },
      {
        id: "b",
        textKey: "quiz.q15.answers.malo",
        tags: {
          hater: 3,
          evitativo: 1,
          caotico: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q15.answers.medio",
        tags: {
          ambiguo: 2,
          adaptable: 1,
          caotico: 1,
        },
      },
    ],
  },
  {
    id: "q16",
    questionKey: "quiz.q16.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q16.answers.empatico",
        tags: {
          empatico: 3,
          emocional: 1,
          extrovertido: 1,
          romantico: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q16.answers.solucionador",
        tags: {
          pragmatico: 3,
          directo: 1,
          racional: 2,
        },
      },
    ],
  },
  {
    id: "q17",
    questionKey: "quiz.q17.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q17.answers.intenso",
        tags: {
          libido: 3,
          contacto_fisico: 1,
          romantico: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q17.answers.medio",
        tags: {
          libido: 2,
        },
      },
      {
        id: "c",
        textKey: "quiz.q17.answers.bajo",
        tags: {
          libido: 1,
        },
      },
    ],
  },
  {
    id: "q18",
    questionKey: "quiz.q18.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q18.answers.lios",
        tags: {
          casual: 3,
          pragmatico: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q18.answers.largas",
        tags: {
          romantico: 1,
          responsable: 2,
        },
      },
      {
        id: "c",
        textKey: "quiz.q18.answers.medio",
        tags: {
          adaptable: 1,
          casual: 1,
          romantico: 1,
        }
      }
    ],
  },
  {
    id: "q19",
    questionKey: "quiz.q19.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q19.answers.dominante",
        meta: {
          tipo: "dom",
        },
      },
      {
        id: "b",
        textKey: "quiz.q19.answers.sumiso",
        meta: {
          tipo: "sub",
        },
      },
      {
        id: "c",
        textKey: "quiz.q19.answers.adaptable",
        meta: {
          tipo: "switch",
        },
      },
    ],
  },
  {
    id: "q20",
    questionKey: "quiz.q20.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q20.answers.si",
        meta: {
          child: "yes",
        },
      },
      {
        id: "b",
        textKey: "quiz.q20.answers.no",
        meta: {
          child: "no",
        },
      },
      {
        id: "c",
        textKey: "quiz.q20.answers.puede",
        meta: {
          child: "maybe",
        },
      },
    ],
  },
  {
    id: "q21",
    questionKey: "quiz.q21.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q21.answers.mono",
        meta: {
          relacion: "mono",
        },
      },
      {
        id: "c",
        textKey: "quiz.q21.answers.abierta",
        meta: {
          relacion: "abierta",
        },
      },
      {
        id: "d",
        textKey: "quiz.q21.answers.ninguna",
        meta: {
          relacion: "arromantico",
        },
      },
      {
        id: "e",
        textKey: "quiz.q21.answers.idc",
        meta: {
          relacion: "cualquiera",
        },
      },
    ],
  },
  {
    id: "q22",
    questionKey: "quiz.q22.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q22.answers.seguro",
        meta: {
          apego: "seguro",
        },
        tags: {
          estable: 2,
          directo: 1,
          resolutivo: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q22.answers.evitativo",
        meta: {
          apego: "evitativo",
        },
        tags: {
          evitativo: 2,
          introvertido: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q22.answers.ansioso",
        meta: {
          apego: "ansioso",
        },
        tags: {
          estricto: 1,
          emocional: 2,
          resolutivo: 1,
        },
      },
      {
        id: "d",
        textKey: "quiz.q22.answers.desorganizado",
        meta: {
          apego: "desorganizado",
        },
        tags: {
          caotico: 1,
          adaptable: 1,
        },
      },
      {
        id: "e",
        textKey: "quiz.q22.answers.no",
        meta: {
          apego: "hater",
        },
        tags: {
          hater: 2,
          introvertido: 1,
        },
      },
    ],
  },
  {
    id: "q23",
    questionKey: "quiz.q23.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q23.answers.seguro",
        meta: {
          quiere_apego: "seguro",
        },
      },
      {
        id: "b",
        textKey: "quiz.q23.answers.evitativo",
        meta: {
          quiere_apego: "evitativo",
        },
      },
      {
        id: "c",
        textKey: "quiz.q23.answers.ansioso",
        meta: {
          quiere_apego: "ansioso",
        },
      },
      {
        id: "d",
        textKey: "quiz.q23.answers.desorganizado",
        meta: {
          quiere_apego: "desorganizado",
        },
      },
      {
        id: "e",
        textKey: "quiz.q23.answers.no",
        meta: {
          quiere_apego: "hater",
        },
      },
    ],
  },
  {
    id: "q24",
    questionKey: "quiz.q24.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q24.answers.palabras",
        tags: {
          afirmacion: 3,
          romantico: 1,
        },
      },
      {
        id: "b",
        textKey: "quiz.q24.answers.tiempo",
        tags: {
          calidad: 3,
          aventurero: 1,
        },
      },
      {
        id: "c",
        textKey: "quiz.q24.answers.regalos",
        tags: {
          regalos: 3,
          empatico: 1,
        },
      },
      {
        id: "d",
        textKey: "quiz.q24.answers.pinguino",
        tags: {
          pinguino: 3,
          caotico: 1,
        },
      },
      {
        id: "e",
        textKey: "quiz.q24.answers.actos",
        tags: {
          actos: 3,
          responsable: 1,
        },
      },
      {
        id: "f",
        textKey: "quiz.q24.answers.contacto",
        tags: {
          contacto_fisico: 1,
        },
      },
      {
        id: "g",
        textKey: "quiz.q24.answers.ninguno",
        tags: {
          otro_lenguaje: 3,
        },
      },
    ],
  },
  {
    id: "q25",
    questionKey: "quiz.q25.question",
    answers: [
      {
        id: "a",
        textKey: "quiz.q25.answers.dominante",
        meta: {
          quiere_tipo: "dom",
        },
      },
      {
        id: "b",
        textKey: "quiz.q25.answers.sumiso",
        meta: {
          quiere_tipo: "sub",
        },
      },
      {
        id: "c",
        textKey: "quiz.q25.answers.adaptable",
        meta: {
          quiere_tipo: "switch",
        },
      },
    ],
  },
];

export const questions = [
  {
    id: "q1",
    question: "Género",
    answers: [
      {
        id: "a",
        text: "Femenino",
        meta: {
          gender: "femenino",
        },
      },
      {
        id: "b",
        text: "Masculino",
        meta: {
          gender: "masculino",
        },
      },
      {
        id: "c",
        text: "Otro",
        meta: {
          gender: "otro",
        },
      },
    ],
  },
  {
    id: "q2",
    question: "Orientación sexual",
    answers: [
      {
        id: "a",
        text: "Hetero",
        meta: {
          sexuality: "hetero",
        },
      },
      {
        id: "b",
        text: "Homo",
        meta: {
          sexuality: "homo",
        },
      },
      {
        id: "c",
        text: "Bi/Pan",
        meta: {
          sexuality: "bi",
        },
      },
      {
        id: "d",
        text: "Asexual",
        meta: {
          sexuality: "asexual",
        },
      },
    ],
  },
  {
    id: "q3",
    question: "Eres...",
    answers: [
      {
        id: "a",
        text: "Introvertido",
        tags: {
          introvertido: 3,
          reservado: 2,
          distante: 1,
          evitativo: 1,
        },
      },
      {
        id: "b",
        text: "Extrovertido",
        tags: {
          extrovertido: 3,
          sociable: 2,
          aventurero: 1,
          expresivo: 1,
        },
      },
      {
        id: "c",
        text: "Ambivertido",
        tags: {
          ambivertido: 2,
          adaptable: 1,
          sociable: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q4",
    question: "Cuando se trata de trabajo/tareas, tú...",
    answers: [
      {
        id: "a",
        text: "Cuanto antes, mejor.",
        tags: {
          responsable: 3,
          organizado: 2,
          controlador: 1,
          racional: 1,
          estricto: 1,
          directo: 1,
        },
      },
      {
        id: "b",
        text: "Meh, ya lo haré mañana... (asi todo el mes)",
        tags: {
          procrastinador: 3,
          relajado: 2,
          caotico: 1,
          evitativo: 1,
        },
      },
      {
        id: "c",
        text: "Me centro en lo más importante primero; lo demás ya veré.",
        tags: {
          pragmatico: 2,
          adaptable: 1,
          responsable: 1,
          relajado: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q5",
    question: "Prefieres...",
    answers: [
      {
        id: "a",
        text: "Caos, aventura, eventos inesperados",
        tags: {
          caotico: 3,
          aventurero: 2,
          impulsivo: 1,
          emocional: 1,
          procrastinador: 1,
        },
      },
      {
        id: "b",
        text: "Rutina, saber qué es lo siguiente, tener control sobre tu vida",
        tags: {
          estable: 3,
          controlador: 2,
          responsable: 2,
          organizado: 2,
          racional: 1,
          estricto: 1,
        },
      },
      {
        id: "c",
        text: "Un poco de ambas. La tranquilidad y la calma son lo mejor, pero a veces viene bien un poco de adrenalina",
        tags: {
          estable: 1,
          adaptable: 2,
          ambivertido: 1,
          responsable: 1,
          relajado: 1,
        },
      },
    ],
  },
  {
    id: "q6",
    question: "En cuanto al contacto físico...",
    answers: [
      {
        id: "a",
        text: "AY, SÍ, POR FAVOR. UN BESO Y MIL ABRAZOS",
        tags: {
          afectivo: 3,
          contacto_fisico: 3,
          impulsivo: 1,
          romantico: 1,
          directo: 1,
          expresivo: 2,
        },
      },
      {
        id: "b",
        text: "Con amigos/familia, vale, de vez en cuando. Con desconocidos, solo si las formalidades lo requieren; preferiblemente no.",
        tags: {
          reservado: 1,
          afectivo: 1,
          adaptable: 1,
          controlador: 1,
          contacto_fisico: 2,
          sutil: 1,
        },
      },
      {
        id: "c",
        text: "Tócame un pelo y te mato.",
        tags: {
          distante: 3,
          contacto_fisico: -1,
          reservado: 2,
          controlador: 2,
          estricto: 1,
          evitativo: 1,
          libido: -1,
        },
      },
    ],
  },
  {
    id: "q7",
    question: "Como pareja, serías...",
    answers: [
      {
        id: "a",
        text: "Romántico",
        tags: {
          romantico: 3,
          afectivo: 1,
          emocional: 1,
          expresivo: 1,
        },
      },
      {
        id: "b",
        text: "Pragmático",
        tags: {
          pragmatico: 3,
          reservado: 1,
          estable: 1,
          racional: 1,
        },
      },
      {
        id: "c",
        text: "¿Depende del momento?",
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
    question: "Eres más...",
    answers: [
      {
        id: "a",
        text: "Emocional",
        tags: {
          emocional: 3,
          caotico: 1,
          afectivo: 2,
          expresivo: 1,
          empatico: 1,
        },
      },
      {
        id: "b",
        text: "Racional",
        tags: {
          racional: 3,
          organizado: 1,
          analitico: 2,
          controlador: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q9",
    question: "En contextos sociales, eres...",
    answers: [
      {
        id: "a",
        text: "Educado",
        tags: {
          educado: 3,
          sutil: 1,
          sociable: 1,
          responsable: 1,
          estable: 1,
          bondadoso: 1,
        },
      },
      {
        id: "b",
        text: "Maleducado",
        tags: {
          grosero: 3,
          directo: 1,
          caotico: 1,
          impulsivo: 1,
          cruel: 1,
          hater: 2,
        },
      },
      {
        id: "c",
        text: "Depende del momento",
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
    question: "Moralmente eres...",
    answers: [
      {
        id: "a",
        text: "Flexible",
        tags: {
          adaptable: 3,
          resolutivo: 1,
          empatico: 1,
        },
      },
      {
        id: "b",
        text: "Estricto",
        tags: {
          estricto: 3,
          organizado: 1,
          estable: 1,
        },
      },
    ],
  },
  {
    id: "q11",
    question: "Cuando hay conflicto, tiendes a ser...",
    answers: [
      {
        id: "a",
        text: "Evitativo",
        tags: {
          evitativo: 3,
          reservado: 2,
          caotico: 1,
          distante: 1,
          sutil: 1,
        },
      },
      {
        id: "b",
        text: "Resolutivo",
        tags: {
          resolutivo: 3,
          directo: 1,
          adaptable: 1,
          analitico: 2,
          expresivo: 1,
        },
      },
    ],
  },
  {
    id: "q12",
    question: "Prefieres el ligoteo...",
    answers: [
      {
        id: "a",
        text: "Explícito",
        tags: {
          directo: 3,
          afectivo: 1,
          romantico: 1,
          expresivo: 1,
        },
      },
      {
        id: "b",
        text: "Sutil",
        tags: {
          sutil: 3,
          reservado: 1,
          relajado: 1,
          distante: 1,
        },
      },
    ],
  },
  {
    id: "q13",
    question: "Procesando las emociones, tú...",
    answers: [
      {
        id: "a",
        text: "Te tomas tu tiempo. A veces te cuesta, o prefieres analizar las cosas con cuidado.",
        tags: {
          introspectivo: 3,
          analitico: 2,
          resolutivo: 1,
        },
      },
      {
        id: "b",
        text: "Te las tomas tal como vienen. No tienes problema con sentirlas, sean buenas o malas, y cuanto antes las aceptes, mejor.",
        tags: {
          emocional: 2,
          expresivo: 2,
        },
      },
      {
        id: "c",
        text: "¿Emociones? Absolutamente no, una perdida de tiempo.",
        tags: {
          evitativo: 3,
          reservado: 1,
          distante: 1,
        },
      },
    ],
  },
  {
    id: "q14",
    question: "Realmente eres...",
    answers: [
      {
        id: "a",
        text: "Inteligente",
        tags: {
          inteligente: 3,
          analitico: 1,
        },
      },
      {
        id: "b",
        text: "No muy brillante.",
        tags: {
          caotico: 2,
          grosero: 1,
        },
      },
      {
        id: "c",
        text: "Tienes cabeza, pero falta interés/recursos",
        tags: {
          inteligente: 1,
          caotico: 1,
          relajado: 1,
        },
      },
    ],
  },
  {
    id: "q15",
    question: "Los demás dirían que eres...",
    answers: [
      {
        id: "a",
        text: "Buena persona",
        tags: {
          bondadoso: 3,
          empatico: 2,
          resolutivo: 1,
          educado: 2,
        },
      },
      {
        id: "b",
        text: "Mala persona",
        tags: {
          cruel: 3,
          hater: 1,
          evitativo: 1,
          caotico: 1,
        },
      },
      {
        id: "c",
        text: "Bastante ambiguo, difícil de etiquetar",
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
    question: "En cuanto a los problemas ajenos, tú...",
    answers: [
      {
        id: "a",
        text: "Ofreces apoyo emocional y te centras, antes de nada, en hacer que el otro se sienta mejor",
        tags: {
          empatico: 3,
          emocional: 1,
          sociable: 1,
          afectivo: 1,
        },
      },
      {
        id: "b",
        text: "Buscas soluciones directamente. Solo un par de palabras dulces no cambiarán la situación.",
        tags: {
          pragmatico: 3,
          directo: 1,
          analitico: 1,
          racional: 2,
        },
      },
    ],
  },
  {
    id: "q17",
    question: "Tu libido es...",
    answers: [
      {
        id: "a",
        text: "Muy intenso",
        tags: {
          libido: 3,
          contacto_fisico: 1,
          afectivo: 1,
        },
      },
      {
        id: "b",
        text: "Moderado",
        tags: {
          libido: 2,
        },
      },
      {
        id: "c",
        text: "Bajo o inexistente",
        tags: {
          libido: 1,
          contacto_fisico: -1,
        },
      },
    ],
  },
  {
    id: "q18",
    question: "Buscas...",
    answers: [
      {
        id: "a",
        text: "Líos de una noche",
        tags: {
          casual: 3,
          pragmatico: 1,
          distante: 1,
        },
      },
      {
        id: "b",
        text: "Relaciones estables y duraderas",
        tags: {
          compromiso: 3,
          romantico: 1,
          responsable: 1,
        },
      },
    ],
  },
  {
    id: "q19",
    question: "Te gustaría alguien mas...",
    answers: [
      {
        id: "a",
        text: "Dominante",
        meta: {
          tipo: "dom",
        },
      },
      {
        id: "b",
        text: "Sumiso",
        meta: {
          tipo: "sub",
        },
      },
      {
        id: "c",
        text: "Adaptable",
        meta: {
          tipo: "switch",
        },
      },
    ],
  },
  {
    id: "q20",
    question: "¿Quieres hijos?",
    answers: [
      {
        id: "a",
        text: "Sí",
        meta: {
          child: "yes",
        },
      },
      {
        id: "b",
        text: "No",
        meta: {
          child: "no",
        },
      },
      {
        id: "c",
        text: "No estoy segur@...",
        meta: {
          child: "maybe",
        },
      },
    ],
  },
  {
    id: "q21",
    question: "Prefieres las relaciones...",
    answers: [
      {
        id: "a",
        text: "Monógamas",
        meta: {
          relacion: "mono",
        },
      },
      {
        id: "b",
        text: "Poliamorosas",
        meta: {
          relacion: "poli",
        },
      },
      {
        id: "c",
        text: "Abiertas",
        meta: {
          relacion: "abierta",
        },
      },
      {
        id: "d",
        text: "Ninguna, gracias.",
        meta: {
          relacion: "arromantico",
        },
      },
      {
        id: "e",
        text: "Da igual.",
        meta: {
          relacion: "cualquiera",
        },
      },
    ],
  },
  {
    id: "q22",
    question: "Tu estilo de apego es...",
    answers: [
      {
        id: "a",
        text: "Seguro",
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
        text: "Evitativo",
        meta: {
          apego: "evitativo",
        },
        tags: {
          evitativo: 2,
          reservado: 1,
          distante: 1,
        },
      },
      {
        id: "c",
        text: "Ansioso",
        meta: {
          apego: "ansioso",
        },
        tags: {
          controlador: 1,
          emocional: 2,
          resolutivo: 1,
        },
      },
      {
        id: "d",
        text: "Desorganizado",
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
        text: "No me gusta la gente.",
        meta: {
          apego: "hater",
        },
        tags: {
          hater: 2,
          distante: 1,
        },
      },
    ],
  },
  {
    id: "q23",
    question: "Y te gustaría que tu pareja fuera...",
    answers: [
      {
        id: "a",
        text: "Seguro",
        meta: {
          quiere_apego: "seguro",
        },
      },
      {
        id: "b",
        text: "Evitativo",
        meta: {
          quiere_apego: "evitativo",
        },
      },
      {
        id: "c",
        text: "Ansioso",
        meta: {
          quiere_apego: "ansioso",
        },
      },
      {
        id: "d",
        text: "Desorganizado",
        meta: {
          quiere_apego: "desorganizado",
        },
      },
      {
        id: "e",
        text: "No le gusta la gente... y a ti te gusta sufrir, claramente.",
        meta: {
          quiere_apego: "hater",
        },
      },
    ],
  },
  {
    id: "q24",
    question: "Tu lenguaje amoroso:",
    answers: [
      {
        id: "a",
        text: "Palabras de afirmación",
        tags: {
          afirmacion: 3,
          afectivo: 1,
          romantico: 1,
        },
      },
      {
        id: "b",
        text: "Tiempo de calidad",
        tags: {
          calidad: 3,
          aventurero: 1,
        },
      },
      {
        id: "c",
        text: "Recibir/dar regalos",
        tags: {
          regalos: 3,
          empatico: 1,
        },
      },
      {
        id: "d",
        text: "Pingüinada (regalar objetos cotidianos o pequeños gestos)",
        tags: {
          pinguino: 3,
          impulsivo: 1,
        },
      },
      {
        id: "e",
        text: "Actos de servicio",
        tags: {
          actos: 3,
          responsable: 1,
        },
      },
      {
        id: "f",
        text: "Contacto físico",
        tags: {
          contacto_fisico: 1,
        },
      },
      {
        id: "g",
        text: "Ninguno de estos",
        tags: {
          otro_lenguaje: 3,
        },
      },
    ],
  },
  {
    id: "q25",
    question: "Te consideras mas...",
    answers: [
      {
        id: "a",
        text: "Dominante",
        meta: {
          quiere_tipo: "dom",
        },
      },
      {
        id: "b",
        text: "Sumiso",
        meta: {
          quiere_tipo: "sub",
        },
      },
      {
        id: "c",
        text: "Adaptable",
        meta: {
          quiere_tipo: "switch",
        },
      },
    ],
  },
];

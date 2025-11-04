import type { Level } from './types';
import { QuestionType } from './types';
import { ClockIcon, SparklesIcon, CalendarIcon, ChatBubbleLeftRightIcon, ArrowTrendingUpIcon, QuestionMarkCircleIcon, ChatBubbleLeftEllipsisIcon } from './components/icons';

export const LEVELS: Level[] = [
  {
    id: 'simple-present',
    title: 'Presente Simple',
    description: 'Aprende a hablar de hábitos, rutinas y hechos generales.',
    icon: ClockIcon,
    formula: {
      affirmative: 'Sujeto + Verbo (s/es)',
      negative: 'Sujeto + do/does not + Verbo',
      interrogative: 'Do/Does + Sujeto + Verbo?',
    },
    questions: [
      // Original 15 questions
      {
        id: 'sp1',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She ___ to the gym every day.',
        options: [{ text: 'go', isCorrect: false }, { text: 'goes', isCorrect: true }, { text: 'is going', isCorrect: false }],
        explanation: "En presente simple, para la tercera persona del singular (he, she, it), se añade -s o -es al verbo.",
        translation: "Ella va al gimnasio todos los días."
      },
      {
        id: 'sp2',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ like spicy food.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: false }],
        explanation: "Para negar en presente simple con 'they', 'we', 'you', 'I', se utiliza 'do not' o 'don't'.",
        translation: "A ellos no les gusta la comida picante."
      },
      {
        id: 'sp3',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ he speak French?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Is', isCorrect: false }, { text: 'Does', isCorrect: true }],
        explanation: "Para preguntar en presente simple con 'he', 'she', 'it', se utiliza el auxiliar 'Does' al principio.",
        translation: "¿Él habla francés?"
      },
      {
        id: 'sp4',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ in a small apartment.',
        options: [{ text: 'lives', isCorrect: false }, { text: 'live', isCorrect: true }, { text: 'are living', isCorrect: false }],
        explanation: "Para 'we', 'they', 'you', 'I', el verbo en presente simple se usa en su forma base (sin -s).",
        translation: "Vivimos en un apartamento pequeño."
      },
      {
        id: 'sp5',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ play the guitar.',
        options: [{ text: "don't", isCorrect: false }, { text: "isn't", isCorrect: false }, { text: "doesn't", isCorrect: true }],
        explanation: "Para negar en presente simple con 'he', 'she', 'it', se utiliza 'does not' o 'doesn't'.",
        translation: "Él no toca la guitarra."
      },
      {
        id: 'sp6',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ they work together?',
        options: [{ text: 'Do', isCorrect: true }, { text: 'Does', isCorrect: false }, { text: 'Are', isCorrect: false }],
        explanation: "Para preguntar en presente simple con 'they', se usa el auxiliar 'Do' al principio.",
        translation: "¿Ellos trabajan juntos?"
      },
      {
        id: 'sp7',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The sun ___ in the east.',
        options: [{ text: 'rise', isCorrect: false }, { text: 'rises', isCorrect: true }, { text: 'is rising', isCorrect: false }],
        explanation: "'The sun' es tercera persona del singular (it), por lo que se añade -s al verbo.",
        translation: "El sol sale por el este."
      },
      {
        id: 'sp8',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ understand the question.',
        options: [{ text: "doesn't", isCorrect: false }, { text: "am not", isCorrect: false }, { text: "don't", isCorrect: true }],
        explanation: "Para negar en presente simple con 'I', se utiliza 'do not' o 'don't'.",
        translation: "No entiendo la pregunta."
      },
      {
        id: 'sp9',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ she like coffee?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Does', isCorrect: true }, { text: 'Is', isCorrect: false }],
        explanation: "Para preguntar en presente simple con 'she', se utiliza el auxiliar 'Does'.",
        translation: "¿A ella le gusta el café?"
      },
      {
        id: 'sp10',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'My parents ___ in Canada.',
        options: [{ text: 'live', isCorrect: true }, { text: 'lives', isCorrect: false }, { text: 'is living', isCorrect: false }],
        explanation: "'My parents' es plural (they), por lo que el verbo va en su forma base.",
        translation: "Mis padres viven en Canadá."
      },
      {
        id: 'sp11',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'This bus ___ stop here.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "'This bus' (it) es tercera persona del singular, por lo que se usa 'doesn't' para negar.",
        translation: "Este autobús no para aquí."
      },
      {
        id: 'sp12',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What time ___ the movie start?',
        options: [{ text: 'do', isCorrect: false }, { text: 'is', isCorrect: false }, { text: 'does', isCorrect: true }],
        explanation: "Para preguntar sobre 'the movie' (it), se usa el auxiliar 'does'.",
        translation: "¿A qué hora empieza la película?"
      },
      {
        id: 'sp13',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'Water ___ at 100 degrees Celsius.',
        options: [{ text: 'boil', isCorrect: false }, { text: 'boils', isCorrect: true }, { text: 'is boiling', isCorrect: false }],
        explanation: "'Water' (it) es tercera persona del singular, por lo que se añade -s al verbo para expresar un hecho científico.",
        translation: "El agua hierve a 100 grados Celsius."
      },
      {
        id: 'sp14',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'You ___ seem very happy today.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: false }],
        explanation: "Para negar con 'you' en presente simple, se usa 'don't'.",
        translation: "No pareces muy feliz hoy."
      },
      {
        id: 'sp15',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'How often ___ you go to the dentist?',
        options: [{ text: 'does', isCorrect: false }, { text: 'are', isCorrect: false }, { text: 'do', isCorrect: true }],
        explanation: "Para preguntar con 'you' sobre hábitos, se usa el auxiliar 'do'.",
        translation: "¿Con qué frecuencia vas al dentista?"
      },
      // Additional 35 questions
      {
        id: 'sp16',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ his emails every morning.',
        options: [{ text: 'check', isCorrect: false }, { text: 'checks', isCorrect: true }, { text: 'is checking', isCorrect: false }],
        explanation: "Para 'he', se añade -s al verbo en presente simple para describir una rutina.",
        translation: "Él revisa sus correos cada mañana."
      },
      {
        id: 'sp17',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ eat meat. She is a vegetarian.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "Se usa 'doesn't' para negar con 'she' en presente simple.",
        translation: "Ella no come carne. Es vegetariana."
      },
      {
        id: 'sp18',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Where ___ your brother work?',
        options: [{ text: 'do', isCorrect: false }, { text: 'is', isCorrect: false }, { text: 'does', isCorrect: true }],
        explanation: "'Your brother' es 'he', por lo que se usa 'does' para preguntar.",
        translation: "¿Dónde trabaja tu hermano?"
      },
      {
        id: 'sp19',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I always ___ my keys.',
        options: [{ text: 'lose', isCorrect: true }, { text: 'loses', isCorrect: false }, { text: 'am losing', isCorrect: false }],
        explanation: "Con 'I', el verbo se usa en su forma base para describir un hábito.",
        translation: "Siempre pierdo mis llaves."
      },
      {
        id: 'sp20',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'We ___ have a car.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "haven't", isCorrect: false }],
        explanation: "Para negar la posesión con 'we', se usa 'don't have'.",
        translation: "No tenemos coche."
      },
      {
        id: 'sp21',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Why ___ you look so tired?',
        options: [{ text: 'do', isCorrect: true }, { text: 'are', isCorrect: false }, { text: 'does', isCorrect: false }],
        explanation: "Se usa el auxiliar 'do' para preguntar con 'you' en presente simple.",
        translation: "¿Por qué pareces tan cansado?"
      },
      {
        id: 'sp22',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'A cat ___ four legs.',
        options: [{ text: 'have', isCorrect: false }, { text: 'has', isCorrect: true }, { text: 'is having', isCorrect: false }],
        explanation: "'A cat' (it) es tercera persona. La forma correcta del verbo 'have' es 'has'.",
        translation: "Un gato tiene cuatro patas."
      },
      {
        id: 'sp23',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The shops ___ open on Sundays.',
        options: [{ text: "doesn't", isCorrect: false }, { text: "don't", isCorrect: true }, { text: "aren't", isCorrect: true }],
        explanation: "'The shops' (they) es plural. La negación puede ser 'don't open' o 'aren't open'. Ambas son comunes. Aquí, 'aren't' se usa con el adjetivo 'open'.",
        translation: "Las tiendas no abren los domingos."
      },
      {
        id: 'sp24',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What ___ this word mean?',
        options: [{ text: 'do', isCorrect: false }, { text: 'does', isCorrect: true }, { text: 'is', isCorrect: false }],
        explanation: "'This word' (it) es singular, por lo que se usa 'does' en la pregunta.",
        translation: "¿Qué significa esta palabra?"
      },
      {
        id: 'sp25',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'It often ___ in winter.',
        options: [{ text: 'snow', isCorrect: false }, { text: 'snows', isCorrect: true }, { text: 'is snowing', isCorrect: false }],
        explanation: "Con 'it', se añade -s al verbo para hablar de patrones climáticos.",
        translation: "A menudo nieva en invierno."
      },
      {
        id: 'sp26',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'My watch ___ work correctly.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "'My watch' (it) es tercera persona del singular. La negación es 'doesn't'.",
        translation: "Mi reloj no funciona correctamente."
      },
      {
        id: 'sp27',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'How much ___ it cost?',
        options: [{ text: 'do', isCorrect: false }, { text: 'does', isCorrect: true }, { text: 'is', isCorrect: false }],
        explanation: "Se usa 'does' para preguntar el precio de algo ('it').",
        translation: "¿Cuánto cuesta?"
      },
      {
        id: 'sp28',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'They ___ to be experts.',
        options: [{ text: 'seem', isCorrect: true }, { text: 'seems', isCorrect: false }, { text: 'are seeming', isCorrect: false }],
        explanation: "Con 'they', el verbo 'seem' se usa en su forma base.",
        translation: "Ellos parecen ser expertos."
      },
      {
        id: 'sp29',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'You ___ need to worry.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: false }],
        explanation: "La negación para 'you' en presente simple es 'don't'.",
        translation: "No necesitas preocuparte."
      },
      {
        id: 'sp30',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ we have enough time?',
        options: [{ text: 'Do', isCorrect: true }, { text: 'Are', isCorrect: false }, { text: 'Does', isCorrect: false }],
        explanation: "Para preguntar con 'we', se usa el auxiliar 'Do'.",
        translation: "¿Tenemos tiempo suficiente?"
      },
      {
        id: 'sp31',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She ___ beautiful.',
        options: [{ text: 'look', isCorrect: false }, { text: 'looks', isCorrect: true }, { text: 'is looking', isCorrect: false }],
        explanation: "Con 'she', el verbo 'look' (parecer) lleva una -s.",
        translation: "Ella parece hermosa."
      },
      {
        id: 'sp32',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'It ___ matter.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "Con 'it', la negación del verbo 'matter' (importar) es 'doesn't matter'.",
        translation: "No importa."
      },
      {
        id: 'sp33',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Who ___ the dishes in your house?',
        options: [{ text: 'do', isCorrect: false }, { text: 'does', isCorrect: true }, { text: 'is', isCorrect: false }],
        explanation: "Cuando 'who' es el sujeto de la pregunta, el verbo se conjuga en tercera persona del singular.",
        translation: "¿Quién lava los platos en tu casa?"
      },
      {
        id: 'sp34',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'My friends and I ___ soccer on weekends.',
        options: [{ text: 'play', isCorrect: true }, { text: 'plays', isCorrect: false }, { text: 'are playing', isCorrect: false }],
        explanation: "'My friends and I' es 'we' (nosotros), por lo que el verbo va en su forma base.",
        translation: "Mis amigos y yo jugamos al fútbol los fines de semana."
      },
      {
        id: 'sp35',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'A spider ___ have six legs; it has eight.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "'A spider' (it) es singular. Se usa 'doesn't have' para negar la posesión.",
        translation: "Una araña no tiene seis patas; tiene ocho."
      },
      {
        id: 'sp36',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ it take long to get there?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Does', isCorrect: true }, { text: 'Is', isCorrect: false }],
        explanation: "Para preguntar sobre la duración de algo ('it'), se usa 'Does'.",
        translation: "¿Se tarda mucho en llegar allí?"
      },
      {
        id: 'sp37',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ to work by bus.',
        options: [{ text: 'travel', isCorrect: false }, { text: 'travels', isCorrect: true }, { text: 'is traveling', isCorrect: false }],
        explanation: "Con 'he', el verbo lleva -s para indicar una acción habitual.",
        translation: "Él viaja al trabajo en autobús."
      },
      {
        id: 'sp38',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ agree with you.',
        options: [{ text: "don't", isCorrect: true }, { text: "am not", isCorrect: false }, { text: "doesn't", isCorrect: false }],
        explanation: "Para expresar desacuerdo con 'I', se usa 'don't agree'.",
        translation: "No estoy de acuerdo contigo."
      },
      {
        id: 'sp39',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Which bus ___ to the city center?',
        options: [{ text: 'go', isCorrect: false }, { text: 'goes', isCorrect: true }, { text: 'do go', isCorrect: false }],
        explanation: "Cuando la palabra interrogativa ('which bus') es el sujeto, el verbo se conjuga en tercera persona.",
        translation: "¿Qué autobús va al centro de la ciudad?"
      },
      {
        id: 'sp40',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'Birds ___ south for the winter.',
        options: [{ text: 'fly', isCorrect: true }, { text: 'flies', isCorrect: false }, { text: 'are flying', isCorrect: false }],
        explanation: "'Birds' (they) es plural, por lo que el verbo 'fly' va en su forma base.",
        translation: "Los pájaros vuelan al sur para el invierno."
      },
      {
        id: 'sp41',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ know many people here.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "La negación para 'she' en presente simple es 'doesn't'.",
        translation: "Ella no conoce a mucha gente aquí."
      },
      {
        id: 'sp42',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'How ___ you spell your name?',
        options: [{ text: 'do', isCorrect: true }, { text: 'does', isCorrect: false }, { text: 'are', isCorrect: false }],
        explanation: "La pregunta común para deletrear usa el auxiliar 'do' con 'you'.",
        translation: "¿Cómo deletreas tu nombre?"
      },
      {
        id: 'sp43',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The Earth ___ around the Sun.',
        options: [{ text: 'revolve', isCorrect: false }, { text: 'revolves', isCorrect: true }, { text: 'is revolving', isCorrect: false }],
        explanation: "'The Earth' (it) es singular, por lo que el verbo lleva -s para expresar un hecho.",
        translation: "La Tierra gira alrededor del Sol."
      },
      {
        id: 'sp44',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ believe in ghosts.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: false }],
        explanation: "Para negar con 'they', se usa 'don't'.",
        translation: "Ellos no creen en fantasmas."
      },
      {
        id: 'sp45',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ your dog bite?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Does', isCorrect: true }, { text: 'Is', isCorrect: false }],
        explanation: "'Your dog' (it/he/she) es singular, por lo que se usa 'Does' para preguntar.",
        translation: "¿Tu perro muerde?"
      },
      {
        id: 'sp46',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ glasses.',
        options: [{ text: 'wear', isCorrect: false }, { text: 'wears', isCorrect: true }, { text: 'is wearing', isCorrect: false }],
        explanation: "Para 'he', se añade -s al verbo para indicar algo que hace habitualmente.",
        translation: "Él usa gafas."
      },
      {
        id: 'sp47',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ drink coffee.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "am not", isCorrect: false }],
        explanation: "La negación para 'I' en presente simple es 'don't'.",
        translation: "Yo no bebo café."
      },
      {
        id: 'sp48',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'When ___ the banks close?',
        options: [{ text: 'do', isCorrect: true }, { text: 'does', isCorrect: false }, { text: 'are', isCorrect: false }],
        explanation: "'The banks' (they) es plural, por lo que se usa el auxiliar 'do'.",
        translation: "¿Cuándo cierran los bancos?"
      },
      {
        id: 'sp49',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She ___ three languages.',
        options: [{ text: 'speak', isCorrect: false }, { text: 'speaks', isCorrect: true }, { text: 'is speaking', isCorrect: false }],
        explanation: "Se añade -s al verbo 'speak' para la tercera persona 'she'.",
        translation: "Ella habla tres idiomas."
      },
      {
        id: 'sp50',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The food here ___ taste very good.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "'The food' (it) es singular, por lo que se usa 'doesn't' para negar.",
        translation: "La comida aquí no sabe muy bien."
      },
    ],
  },
  {
    id: 'present-continuous',
    title: 'Presente Continuo',
    description: 'Describe acciones que están sucediendo en este momento.',
    icon: SparklesIcon,
    formula: {
      affirmative: 'Sujeto + am/is/are + Verbo-ing',
      negative: 'Sujeto + am/is/are not + Verbo-ing',
      interrogative: 'Am/Is/Are + Sujeto + Verbo-ing?',
    },
    questions: [
      // Original 15 questions
      {
        id: 'pc1',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I am ___ a book right now.',
        options: [{ text: 'read', isCorrect: false }, { text: 'reading', isCorrect: true }, { text: 'reads', isCorrect: false }],
        explanation: "El presente continuo se forma con el verbo 'to be' (am, is, are) + el verbo principal en gerundio (-ing).",
        translation: "Estoy leyendo un libro ahora mismo."
      },
      {
        id: 'pc2',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ watching TV.',
        options: [{ text: "isn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: false }],
        explanation: "Para negar en presente continuo, se añade 'not' después del verbo 'to be'. La contracción de 'is not' es 'isn't'.",
        translation: "Él no está viendo la televisión."
      },
      {
        id: 'pc3',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ they playing soccer?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Are', isCorrect: true }, { text: 'Does', isCorrect: false }],
        explanation: "Para preguntar en presente continuo, se invierte el sujeto y el verbo 'to be'. 'Are' va al principio de la oración.",
        translation: "¿Están ellos jugando al fútbol?"
      },
      {
        id: 'pc4',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'You ___ making a lot of noise!',
        options: [{ text: 'is', isCorrect: false }, { text: 'are', isCorrect: true }, { text: 'do', isCorrect: false }],
        explanation: "Con el sujeto 'you', se usa 'are' para formar el presente continuo.",
        translation: "¡Estás haciendo mucho ruido!"
      },
      {
        id: 'pc5',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'We ___ going to the party tonight.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: true }],
        explanation: "Para negar con 'we' en presente continuo, se usa 'are not' o 'aren't'.",
        translation: "Nosotros no vamos a la fiesta esta noche."
      },
      {
        id: 'pc6',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What ___ you doing?',
        options: [{ text: 'is', isCorrect: false }, { text: 'do', isCorrect: false }, { text: 'are', isCorrect: true }],
        explanation: "En preguntas con 'you' en presente continuo, se usa 'are' antes del sujeto.",
        translation: "¿Qué estás haciendo?"
      },
      {
        id: 'pc7',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She is ___ for her keys.',
        options: [{ text: 'look', isCorrect: false }, { text: 'looking', isCorrect: true }, { text: 'looks', isCorrect: false }],
        explanation: "Después de 'is', el verbo principal va en gerundio (-ing) en el presente continuo.",
        translation: "Ella está buscando sus llaves."
      },
      {
        id: 'pc8',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'It ___ raining anymore.',
        options: [{ text: "doesn't", isCorrect: false }, { text: "isn't", isCorrect: true }, { text: "don't", isCorrect: false }],
        explanation: "La negación para 'it' en presente continuo es 'is not' o 'isn't'.",
        translation: "Ya no está lloviendo."
      },
      {
        id: 'pc9',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ he sleeping?',
        options: [{ text: 'Does', isCorrect: false }, { text: 'Are', isCorrect: false }, { text: 'Is', isCorrect: true }],
        explanation: "Para preguntar con 'he' en presente continuo, se pone 'Is' al principio.",
        translation: "¿Está él durmiendo?"
      },
      {
        id: 'pc10',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The children ___ in the garden.',
        options: [{ text: 'play', isCorrect: false }, { text: 'are playing', isCorrect: true }, { text: 'plays', isCorrect: false }],
        explanation: "'The children' es plural (they), por lo que se usa 'are' + el verbo en gerundio (-ing).",
        translation: "Los niños están jugando en el jardín."
      },
      {
        id: 'pc11',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ listening to you.',
        options: [{ text: "am not", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "isn't", isCorrect: false }],
        explanation: "La negación para 'I' en presente continuo es 'am not'.",
        translation: "No te estoy escuchando."
      },
      {
        id: 'pc12',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Why ___ she crying?',
        options: [{ text: 'does', isCorrect: false }, { text: 'is', isCorrect: true }, { text: 'do', isCorrect: false }],
        explanation: "Para preguntar con 'she' en presente continuo, se usa 'is' antes del sujeto.",
        translation: "¿Por qué está llorando ella?"
      },
      {
        id: 'pc13',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'They ___ building a new bridge.',
        options: [{ text: 'are building', isCorrect: true }, { text: 'build', isCorrect: false }, { text: 'builds', isCorrect: false }],
        explanation: "Con el sujeto 'they', se usa 'are' + el verbo en gerundio (-ing).",
        translation: "Están construyendo un nuevo puente."
      },
      {
        id: 'pc14',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'You ___ paying attention.',
        options: [{ text: "don't", isCorrect: false }, { text: "isn't", isCorrect: false }, { text: "aren't", isCorrect: true }],
        explanation: "La negación para 'you' en presente continuo es 'are not' o 'aren't'.",
        translation: "No estás prestando atención."
      },
      {
        id: 'pc15',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ it getting dark outside?',
        options: [{ text: 'Does', isCorrect: false }, { text: 'Is', isCorrect: true }, { text: 'Do', isCorrect: false }],
        explanation: "Para preguntar con 'it' en presente continuo, la oración comienza con 'Is'.",
        translation: "¿Está oscureciendo afuera?"
      },
      // Additional 35 questions
      {
        id: 'pc16',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'Please be quiet. The baby ___.',
        options: [{ 'text': 'sleeps', isCorrect: false }, { 'text': 'is sleeping', isCorrect: true }, { 'text': 'sleep', isCorrect: false }],
        explanation: "Se usa el presente continuo para una acción que está sucediendo en el momento de hablar.",
        translation: "Por favor, silencio. El bebé está durmiendo."
      },
      {
        id: 'pc17',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'We ___ working on that project anymore.',
        options: [{ 'text': "don't", isCorrect: false }, { 'text': "aren't", isCorrect: true }, { 'text': "doesn't", isCorrect: false }],
        explanation: "La negación con 'we' en presente continuo es 'are not' o 'aren't'.",
        translation: "Ya no estamos trabajando en ese proyecto."
      },
      {
        id: 'pc18',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Who ___ you talking to?',
        options: [{ 'text': 'is', isCorrect: false }, { 'text': 'are', isCorrect: true }, { 'text': 'do', isCorrect: false }],
        explanation: "Para preguntar con 'you', se usa 'are' en la estructura del presente continuo.",
        translation: "¿Con quién estás hablando?"
      },
      {
        id: 'pc19',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'My brother ___ for his exams this week.',
        options: [{ 'text': 'studies', isCorrect: false }, { 'text': 'is studying', isCorrect: true }, { 'text': 'study', isCorrect: false }],
        explanation: "El presente continuo también se usa para acciones temporales que ocurren alrededor del presente.",
        translation: "Mi hermano está estudiando para sus exámenes esta semana."
      },
      {
        id: 'pc20',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The computer ___ working properly.',
        options: [{ 'text': "doesn't", isCorrect: false }, { 'text': "isn't", isCorrect: true }, { 'text': "don't", isCorrect: false }],
        explanation: "La negación para 'the computer' (it) en presente continuo es 'isn't'.",
        translation: "El ordenador no está funcionando correctamente."
      },
      {
        id: 'pc21',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What ___ she wearing?',
        options: [{ 'text': 'is', isCorrect: true }, { 'text': 'does', isCorrect: false }, { 'text': 'do', isCorrect: false }],
        explanation: "Se usa 'is' para preguntar con 'she' en presente continuo.",
        translation: "¿Qué lleva puesto ella?"
      },
      {
        id: 'pc22',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ dinner at the moment.',
        options: [{ 'text': 'cook', isCorrect: false }, { 'text': 'am cooking', isCorrect: true }, { 'text': 'cooks', isCorrect: false }],
        explanation: "'At the moment' es una clara señal para usar el presente continuo. Con 'I', se usa 'am'.",
        translation: "Estoy cocinando la cena en este momento."
      },
      {
        id: 'pc23',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ listening to the teacher.',
        options: [{ 'text': "don't", isCorrect: false }, { 'text': "aren't", isCorrect: true }, { 'text': "isn't", isCorrect: false }],
        explanation: "La negación para 'they' en presente continuo es 'aren't'.",
        translation: "Ellos no están escuchando al profesor."
      },
      {
        id: 'pc24',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ you feeling better today?',
        options: [{ 'text': 'Do', isCorrect: false }, { 'text': 'Are', isCorrect: true }, { 'text': 'Is', isCorrect: false }],
        explanation: "Las preguntas con 'you' en presente continuo empiezan con 'Are'.",
        translation: "¿Te sientes mejor hoy?"
      },
      {
        id: 'pc25',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ a shower.',
        options: [{ 'text': 'has', isCorrect: false }, { 'text': 'is having', isCorrect: true }, { 'text': 'haves', isCorrect: false }],
        explanation: "'To have a shower' es una acción. En presente continuo es 'is having a shower'.",
        translation: "Él se está duchando."
      },
      {
        id: 'pc26',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ complaining, I\'m just explaining.',
        options: [{ 'text': "am not", isCorrect: true }, { 'text': "don't", isCorrect: false }, { 'text': "isn't", isCorrect: false }],
        explanation: "La negación para 'I' en presente continuo es 'am not'.",
        translation: "No me estoy quejando, solo estoy explicando."
      },
      {
        id: 'pc27',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Where ___ they staying?',
        options: [{ 'text': 'do', isCorrect: false }, { 'text': 'are', isCorrect: true }, { 'text': 'is', isCorrect: false }],
        explanation: "Para preguntar con 'they', se usa 'are' en la estructura del presente continuo.",
        translation: "¿Dónde se están quedando?"
      },
      {
        id: 'pc28',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The world ___ constantly.',
        options: [{ 'text': 'changes', isCorrect: false }, { 'text': 'is changing', isCorrect: true }, { 'text': 'change', isCorrect: false }],
        explanation: "Se usa el presente continuo para describir tendencias o situaciones que están cambiando.",
        translation: "El mundo está cambiando constantemente."
      },
      {
        id: 'pc29',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ coming with us.',
        options: [{ 'text': "doesn't", isCorrect: false }, { 'text': "isn't", isCorrect: true }, { 'text': "don't", isCorrect: false }],
        explanation: "La negación para 'she' en presente continuo es 'isn't'.",
        translation: "Ella no viene con nosotros."
      },
      {
        id: 'pc30',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ I talking too much?',
        options: [{ 'text': 'Do', isCorrect: false }, { 'text': 'Am', isCorrect: true }, { 'text': 'Are', isCorrect: false }],
        explanation: "Para preguntar con 'I' en presente continuo, se usa 'Am' al principio.",
        translation: "¿Estoy hablando demasiado?"
      },
      {
        id: 'pc31',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'You ___ sitting in my chair.',
        options: [{ 'text': 'are sitting', isCorrect: true }, { 'text': 'sit', isCorrect: false }, { 'text': 'sits', isCorrect: false }],
        explanation: "Con 'you' se usa 'are'. El verbo 'sit' duplica la 't' en su forma -ing.",
        translation: "Estás sentado en mi silla."
      },
      {
        id: 'pc32',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'It ___ working. I think it\'s broken.',
        options: [{ 'text': "doesn't", isCorrect: false }, { 'text': "isn't", isCorrect: true }, { 'text': "don't", isCorrect: false }],
        explanation: "La negación para 'it' en presente continuo es 'is not' o 'isn't'.",
        translation: "No está funcionando. Creo que está roto."
      },
      {
        id: 'pc33',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Why ___ you laughing?',
        options: [{ 'text': 'do', isCorrect: false }, { 'text': 'are', isCorrect: true }, { 'text': 'is', isCorrect: false }],
        explanation: "Para preguntar con 'you', se usa 'are' en la estructura de presente continuo.",
        translation: "¿Por qué te estás riendo?"
      },
      {
        id: 'pc34',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ a great time on vacation.',
        options: [{ 'text': 'have', isCorrect: false }, { 'text': 'are having', isCorrect: true }, { 'text': 'has', isCorrect: false }],
        explanation: "Para expresar la experiencia de 'pasar un buen rato', se usa 'are having'.",
        translation: "Estamos pasándolo genial en las vacaciones."
      },
      {
        id: 'pc35',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ wearing a coat, even though it\'s cold.',
        options: [{ 'text': "doesn't", isCorrect: false }, { 'text': "isn't", isCorrect: true }, { 'text': "don't", isCorrect: false }],
        explanation: "La negación para 'he' en presente continuo es 'isn't'.",
        translation: "Él no lleva puesto un abrigo, aunque hace frío."
      },
      {
        id: 'pc36',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ anyone using this computer?',
        options: [{ 'text': 'Does', isCorrect: false }, { 'text': 'Is', isCorrect: true }, { 'text': 'Are', isCorrect: false }],
        explanation: "'Anyone' se trata como un sujeto singular, por lo que se usa 'Is'.",
        translation: "¿Alguien está usando este ordenador?"
      },
      {
        id: 'pc37',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The bus ___ . Let\'s go!',
        options: [{ 'text': 'comes', isCorrect: false }, { 'text': 'is coming', isCorrect: true }, { 'text': 'come', isCorrect: false }],
        explanation: "Se usa el presente continuo para una acción que está a punto de suceder o en proceso.",
        translation: "El autobús está llegando. ¡Vamos!"
      },
      {
        id: 'pc38',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'You ___ trying hard enough.',
        options: [{ 'text': "don't", isCorrect: false }, { 'text': "aren't", isCorrect: true }, { 'text': "isn't", isCorrect: false }],
        explanation: "La negación para 'you' en presente continuo es 'aren't'.",
        translation: "No te estás esforzando lo suficiente."
      },
      {
        id: 'pc39',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What book ___ you currently reading?',
        options: [{ 'text': 'do', isCorrect: false }, { 'text': 'are', isCorrect: true }, { 'text': 'is', isCorrect: false }],
        explanation: "'Currently' indica una acción temporal, por lo que se usa presente continuo. Con 'you' se usa 'are'.",
        translation: "¿Qué libro estás leyendo actualmente?"
      },
      {
        id: 'pc40',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'They ___ about moving to a new city.',
        options: [{ 'text': 'think', isCorrect: false }, { 'text': 'are thinking', isCorrect: true }, { 'text': 'thinks', isCorrect: false }],
        explanation: "Cuando 'think' significa 'considerar', se puede usar en presente continuo.",
        translation: "Ellos están pensando en mudarse a una nueva ciudad."
      },
      {
        id: 'pc41',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The phone ___ ringing.',
        options: [{ 'text': "doesn't", isCorrect: false }, { 'text': "isn't", isCorrect: true }, { 'text': "don't", isCorrect: false }],
        explanation: "La negación para 'the phone' (it) en presente continuo es 'isn't'.",
        translation: "El teléfono no está sonando."
      },
      {
        id: 'pc42',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ we going in the right direction?',
        options: [{ 'text': 'Do', isCorrect: false }, { 'text': 'Are', isCorrect: true }, { 'text': 'Is', isCorrect: false }],
        explanation: "Para preguntar con 'we', se usa 'Are' al principio de la oración.",
        translation: "¿Vamos en la dirección correcta?"
      },
      {
        id: 'pc43',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She ___ more and more like her mother.',
        options: [{ 'text': 'becomes', isCorrect: false }, { 'text': 'is becoming', isCorrect: true }, { 'text': 'become', isCorrect: false }],
        explanation: "Se usa el presente continuo para describir un cambio gradual.",
        translation: "Se está pareciendo cada vez más a su madre."
      },
      {
        id: 'pc44',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ joking.',
        options: [{ 'text': "am not", isCorrect: true }, { 'text': "don't", isCorrect: false }, { 'text': "isn't", isCorrect: false }],
        explanation: "La negación para 'I' en presente continuo es 'am not'.",
        translation: "No estoy bromeando."
      },
      {
        id: 'pc45',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Who ___ making that terrible noise?',
        options: [{ 'text': 'are', isCorrect: false }, { 'text': 'is', isCorrect: true }, { 'text': 'does', isCorrect: false }],
        explanation: "Cuando 'who' es el sujeto, se usa la forma singular 'is'.",
        translation: "¿Quién está haciendo ese ruido terrible?"
      },
      {
        id: 'pc46',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'Look! That dog ___ to swim.',
        options: [{ 'text': 'learns', isCorrect: false }, { 'text': 'is learning', isCorrect: true }, { 'text': 'learn', isCorrect: false }],
        explanation: "La palabra 'Look!' indica una acción que está sucediendo ahora mismo.",
        translation: "¡Mira! Ese perro está aprendiendo a nadar."
      },
      {
        id: 'pc47',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The kids ___ sleeping, they are watching a movie.',
        options: [{ 'text': "don't", isCorrect: false }, { 'text': "aren't", isCorrect: true }, { 'text': "isn't", isCorrect: false }],
        explanation: "La negación para 'the kids' (they) en presente continuo es 'aren't'.",
        translation: "Los niños no están durmiendo, están viendo una película."
      },
      {
        id: 'pc48',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ your English getting better?',
        options: [{ 'text': 'Does', isCorrect: false }, { 'text': 'Is', isCorrect: true }, { 'text': 'Are', isCorrect: false }],
        explanation: "'Your English' (it) es singular, por lo que la pregunta comienza con 'Is'.",
        translation: "¿Está mejorando tu inglés?"
      },
      {
        id: 'pc49',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ for a job at the moment.',
        options: [{ 'text': 'look', isCorrect: false }, { 'text': 'am looking', isCorrect: true }, { 'text': 'looks', isCorrect: false }],
        explanation: "'At the moment' indica que la acción es temporal y está en progreso.",
        translation: "Estoy buscando trabajo en este momento."
      },
      {
        id: 'pc50',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ feeling well, so he\'s staying home.',
        options: [{ 'text': "doesn't", isCorrect: false }, { 'text': "isn't", isCorrect: true }, { 'text': "don't", isCorrect: false }],
        explanation: "La negación para 'he' en presente continuo es 'isn't'.",
        translation: "Él no se siente bien, así que se queda en casa."
      }
    ]
  },
  {
    id: 'simple-past',
    title: 'Pasado Simple',
    description: 'Habla sobre acciones completadas en el pasado.',
    icon: CalendarIcon,
    formula: {
      affirmative: 'Sujeto + Verbo-ed / irregular',
      negative: 'Sujeto + did not + Verbo',
      interrogative: 'Did + Sujeto + Verbo?',
    },
    questions: [
      // Original 15 questions
      {
        id: 'spa1',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ to the cinema yesterday.',
        options: [{ text: 'go', isCorrect: false }, { text: 'gone', isCorrect: false }, { text: 'went', isCorrect: true }],
        explanation: "'Went' es la forma en pasado simple del verbo irregular 'go'.",
        translation: "Nosotros fuimos al cine ayer."
      },
      {
        id: 'spa2',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ call me last night.',
        options: [{ text: "didn't", isCorrect: true }, { text: "wasn't", isCorrect: false }, { text: "don't", isCorrect: false }],
        explanation: "Para negar en pasado simple, se usa el auxiliar 'did not' (didn't) y el verbo principal en su forma base (call).",
        translation: "Ella no me llamó anoche."
      },
      {
        id: 'spa3',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ you finish your homework?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Did', isCorrect: true }, { text: 'Were', isCorrect: false }],
        explanation: "Para preguntar en pasado simple, se usa el auxiliar 'Did' al principio y el verbo en su forma base.",
        translation: "¿Terminaste tu tarea?"
      },
      {
        id: 'spa4',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ a great movie last night.',
        options: [{ text: 'watch', isCorrect: false }, { text: 'watched', isCorrect: true }, { text: 'was watching', isCorrect: false }],
        explanation: "'Watch' es un verbo regular, por lo que su forma en pasado simple es 'watched' (añadiendo -ed).",
        translation: "Vi una película genial anoche."
      },
      {
        id: 'spa5',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ visit the museum.',
        options: [{ text: "weren't", isCorrect: false }, { text: "don't", isCorrect: false }, { text: "didn't", isCorrect: true }],
        explanation: "La negación en pasado simple se forma con 'didn't' + el verbo en su forma base (visit).",
        translation: "Ellos no visitaron el museo."
      },
      {
        id: 'spa6',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Where ___ you go on vacation?',
        options: [{ text: 'were', isCorrect: false }, { text: 'did', isCorrect: true }, { text: 'do', isCorrect: false }],
        explanation: "Para preguntar en pasado simple, se usa el auxiliar 'did' antes del sujeto.",
        translation: "¿A dónde fuiste de vacaciones?"
      },
      {
        id: 'spa7',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ me the truth.',
        options: [{ text: 'tell', isCorrect: false }, { text: 'telled', isCorrect: false }, { text: 'told', isCorrect: true }],
        explanation: "'Told' es la forma en pasado simple del verbo irregular 'tell'.",
        translation: "Él me dijo la verdad."
      },
      {
        id: 'spa8',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ know the answer.',
        options: [{ text: "wasn't", isCorrect: false }, { text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }],
        explanation: "Se usa 'didn't' + el verbo en forma base (know) para negar en pasado simple.",
        translation: "Yo no sabía la respuesta."
      },
      {
        id: 'spa9',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ she buy a new car?',
        options: [{ text: 'Does', isCorrect: false }, { text: 'Was', isCorrect: false }, { text: 'Did', isCorrect: true }],
        explanation: "Las preguntas en pasado simple empiezan con 'Did', y el verbo principal va en su forma base (buy).",
        translation: "¿Compró ella un coche nuevo?"
      },
      {
        id: 'spa10',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ to music for hours.',
        options: [{ text: 'listened', isCorrect: true }, { text: 'listen', isCorrect: false }, { text: 'were listening', isCorrect: false }],
        explanation: "El pasado del verbo regular 'listen' es 'listened'.",
        translation: "Escuchamos música durante horas."
      },
      {
        id: 'spa11',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ come to the party.',
        options: [{ text: "didn't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "La negación en pasado simple usa 'didn't' y el verbo en su forma base 'come'.",
        translation: "Él no vino a la fiesta."
      },
      {
        id: 'spa12',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'When ___ they arrive?',
        options: [{ text: 'did', isCorrect: true }, { text: 'do', isCorrect: false }, { text: 'were', isCorrect: false }],
        explanation: "Para preguntas sobre el pasado con 'they', se usa el auxiliar 'did'.",
        translation: "¿Cuándo llegaron ellos?"
      },
      {
        id: 'spa13',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ my keys this morning.',
        options: [{ text: 'lose', isCorrect: false }, { text: 'lost', isCorrect: true }, { text: 'losed', isCorrect: false }],
        explanation: "'Lost' es la forma en pasado del verbo irregular 'lose'.",
        translation: "Perdí mis llaves esta mañana."
      },
      {
        id: 'spa14',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'We ___ have time to eat.',
        options: [{ text: "weren't", isCorrect: false }, { text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }],
        explanation: "Para negar 'have' como verbo principal en pasado, se usa 'didn't have'.",
        translation: "No tuvimos tiempo para comer."
      },
      {
        id: 'spa15',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ it rain yesterday?',
        options: [{ text: 'Was', isCorrect: false }, { text: 'Did', isCorrect: true }, { text: 'Does', isCorrect: false }],
        explanation: "Las preguntas sobre el clima en el pasado usan el auxiliar 'Did'.",
        translation: "¿Llovió ayer?"
      },
      // Additional 35 questions
      {
        id: 'spa16',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'They ___ the new restaurant last week.',
        options: [{ text: 'tried', isCorrect: true }, { text: 'tryed', isCorrect: false }, { text: 'try', isCorrect: false }],
        explanation: "El pasado del verbo 'try' es 'tried'. La 'y' cambia a 'i' y se añade -ed.",
        translation: "Ellos probaron el nuevo restaurante la semana pasada."
      },
      {
        id: 'spa17',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ see you at the meeting.',
        options: [{ text: "didn't", isCorrect: true }, { text: "wasn't", isCorrect: false }, { text: "don't", isCorrect: false }],
        explanation: "Se usa 'didn't' + el verbo en forma base (see) para negar en pasado simple.",
        translation: "No te vi en la reunión."
      },
      {
        id: 'spa18',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What ___ you do over the weekend?',
        options: [{ text: 'did', isCorrect: true }, { text: 'were', isCorrect: false }, { text: 'do', isCorrect: false }],
        explanation: "Para preguntar sobre actividades pasadas con 'you', se usa el auxiliar 'did'.",
        translation: "¿Qué hiciste durante el fin de semana?"
      },
      {
        id: 'spa19',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She ___ a cake for my birthday.',
        options: [{ text: 'maked', isCorrect: false }, { text: 'made', isCorrect: true }, { text: 'make', isCorrect: false }],
        explanation: "'Made' es la forma en pasado del verbo irregular 'make'.",
        translation: "Ella hizo un pastel para mi cumpleaños."
      },
      {
        id: 'spa20',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ like the gift.',
        options: [{ text: "didn't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "La negación en pasado simple se forma con 'didn't' + verbo en forma base (like).",
        translation: "A él no le gustó el regalo."
      },
      {
        id: 'spa21',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ they enjoy the concert?',
        options: [{ text: 'Did', isCorrect: true }, { text: 'Do', isCorrect: false }, { text: 'Were', isCorrect: false }],
        explanation: "Para preguntar con 'they' en pasado simple, se usa 'Did'.",
        translation: "¿Disfrutaron ellos del concierto?"
      },
      {
        id: 'spa22',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ up early this morning.',
        options: [{ text: 'woke', isCorrect: true }, { text: 'waked', isCorrect: false }, { text: 'wake', isCorrect: false }],
        explanation: "'Woke' es el pasado simple del verbo irregular 'wake'.",
        translation: "Me desperté temprano esta mañana."
      },
      {
        id: 'spa23',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'We ___ go on vacation last year.',
        options: [{ text: "didn't", isCorrect: true }, { text: "weren't", isCorrect: false }, { text: "don't", isCorrect: false }],
        explanation: "Para negar con 'we' en pasado simple, se usa 'didn't' y el verbo en su forma base (go).",
        translation: "No fuimos de vacaciones el año pasado."
      },
      {
        id: 'spa24',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Why ___ she leave early?',
        options: [{ text: 'did', isCorrect: true }, { text: 'was', isCorrect: false }, { text: 'does', isCorrect: false }],
        explanation: "Las preguntas en pasado simple usan el auxiliar 'did' antes del sujeto.",
        translation: "¿Por qué se fue ella temprano?"
      },
      {
        id: 'spa25',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The train ___ on time.',
        options: [{ text: 'arrived', isCorrect: true }, { text: 'arrive', isCorrect: false }, { text: 'was arriving', isCorrect: false }],
        explanation: "'Arrive' es un verbo regular. Su pasado simple es 'arrived'.",
        translation: "El tren llegó a tiempo."
      },
      {
        id: 'spa26',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'It ___ snow last winter.',
        options: [{ text: "didn't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "Para negar acciones climáticas en el pasado, se usa 'didn't' + el verbo en forma base.",
        translation: "No nevó el invierno pasado."
      },
      {
        id: 'spa27',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'How ___ you learn English?',
        options: [{ text: 'did', isCorrect: true }, { text: 'were', isCorrect: false }, { text: 'do', isCorrect: false }],
        explanation: "Para preguntar sobre un proceso pasado, se usa 'did'.",
        translation: "¿Cómo aprendiste inglés?"
      },
      {
        id: 'spa28',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ his car last month.',
        options: [{ text: 'selled', isCorrect: false }, { text: 'sold', isCorrect: true }, { text: 'sell', isCorrect: false }],
        explanation: "'Sold' es el pasado simple del verbo irregular 'sell'.",
        translation: "Él vendió su coche el mes pasado."
      },
      {
        id: 'spa29',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ invite us to the wedding.',
        options: [{ text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "weren't", isCorrect: false }],
        explanation: "La negación en pasado simple usa 'didn't' y el verbo en su forma base 'invite'.",
        translation: "No nos invitaron a la boda."
      },
      {
        id: 'spa30',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ you at home yesterday evening?',
        options: [{ text: 'Did', isCorrect: false }, { text: 'Were', isCorrect: true }, { text: 'Do', isCorrect: false }],
        explanation: "Cuando el verbo principal es 'to be', se usa 'was' o 'were' para preguntar en pasado, no 'did'.",
        translation: "¿Estuviste en casa ayer por la tarde?"
      },
      {
        id: 'spa31',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ a strange noise outside.',
        options: [{ text: 'heared', isCorrect: false }, { text: 'heard', isCorrect: true }, { text: 'hear', isCorrect: false }],
        explanation: "'Heard' es el pasado del verbo irregular 'hear'.",
        translation: "Oí un ruido extraño afuera."
      },
      {
        id: 'spa32',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ at school yesterday. She was sick.',
        options: [{ text: "didn't be", isCorrect: false }, { text: "wasn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "La negación del verbo 'to be' en pasado es 'was not' (wasn't) o 'were not' (weren't).",
        translation: "Ella no estuvo en la escuela ayer. Estaba enferma."
      },
      {
        id: 'spa33',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Who ___ that book?',
        options: [{ text: 'did write', isCorrect: false }, { text: 'wrote', isCorrect: true }, { text: 'written', isCorrect: false }],
        explanation: "Cuando 'who' es el sujeto, no se usa el auxiliar 'did'. El verbo va directamente en pasado.",
        translation: "¿Quién escribió ese libro?"
      },
      {
        id: 'spa34',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ for the bus for 20 minutes.',
        options: [{ text: 'waited', isCorrect: true }, { text: 'wait', isCorrect: false }, { text: 'were waiting', isCorrect: false }],
        explanation: "'Wait' es un verbo regular, por lo que su pasado es 'waited'.",
        translation: "Esperamos el autobús durante 20 minutos."
      },
      {
        id: 'spa35',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ understand the instructions.',
        options: [{ text: "didn't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "Se usa 'didn't' + verbo en forma base (understand) para negar.",
        translation: "Él no entendió las instrucciones."
      },
      {
        id: 'spa36',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ it expensive?',
        options: [{ text: 'Did', isCorrect: false }, { text: 'Was', isCorrect: true }, { text: 'Is', isCorrect: false }],
        explanation: "Para preguntar por un estado o cualidad en el pasado con 'it', se usa 'Was'.",
        translation: "¿Era caro?"
      },
      {
        id: 'spa37',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'They ___ married in 2010.',
        options: [{ text: 'get', isCorrect: false }, { text: 'got', isCorrect: true }, { text: 'gotten', isCorrect: false }],
        explanation: "'Got' es el pasado simple del verbo irregular 'get'.",
        translation: "Se casaron en 2010."
      },
      {
        id: 'spa38',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ say anything.',
        options: [{ text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "La negación en pasado simple usa 'didn't' + el verbo en forma base (say).",
        translation: "No dije nada."
      },
      {
        id: 'spa39',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What time ___ you get home?',
        options: [{ text: 'did', isCorrect: true }, { text: 'do', isCorrect: false }, { text: 'were', isCorrect: false }],
        explanation: "Se usa el auxiliar 'did' para preguntar con 'you' en pasado.",
        translation: "¿A qué hora llegaste a casa?"
      },
      {
        id: 'spa40',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She ___ a lot when she was a child.',
        options: [{ text: 'readed', isCorrect: false }, { text: 'read', isCorrect: true }, { text: 'reads', isCorrect: false }],
        explanation: "El pasado del verbo 'read' se escribe igual, pero se pronuncia /red/.",
        translation: "Ella leía mucho cuando era niña."
      },
      {
        id: 'spa41',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The children ___ break the window.',
        options: [{ text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "weren't", isCorrect: false }],
        explanation: "Se usa 'didn't' con el verbo en su forma base (break) para negar en pasado.",
        translation: "Los niños no rompieron la ventana."
      },
      {
        id: 'spa42',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Where ___ you born?',
        options: [{ text: 'did', isCorrect: false }, { text: 'were', isCorrect: true }, { text: 'are', isCorrect: false }],
        explanation: "La pregunta 'dónde naciste' usa la forma pasiva del pasado del verbo 'to be'.",
        translation: "¿Dónde naciste?"
      },
      {
        id: 'spa43',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ to call you, but I forgot.',
        options: [{ text: 'meaned', isCorrect: false }, { text: 'meant', isCorrect: true }, { text: 'mean', isCorrect: false }],
        explanation: "'Meant' es el pasado simple del verbo irregular 'mean'.",
        translation: "Quería llamarte, pero lo olvidé."
      },
      {
        id: 'spa44',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'The movie ___ very good.',
        options: [{ text: "didn't be", isCorrect: false }, { text: "wasn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
        explanation: "Para describir una cualidad en el pasado (con el verbo 'to be'), se niega con 'wasn't' o 'weren't'.",
        translation: "La película no fue muy buena."
      },
      {
        id: 'spa45',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ he tell you his secret?',
        options: [{ text: 'Did', isCorrect: true }, { text: 'Does', isCorrect: false }, { text: 'Was', isCorrect: false }],
        explanation: "Las preguntas en pasado simple con 'he' usan el auxiliar 'Did'.",
        translation: "¿Te contó su secreto?"
      },
      {
        id: 'spa46',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'They ___ all their money at the casino.',
        options: [{ text: 'spended', isCorrect: false }, { text: 'spent', isCorrect: true }, { text: 'spend', isCorrect: false }],
        explanation: "'Spent' es el pasado del verbo irregular 'spend'.",
        translation: "Se gastaron todo el dinero en el casino."
      },
      {
        id: 'spa47',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ sleep well last night.',
        options: [{ text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "Se usa 'didn't' + el verbo en forma base (sleep) para negar.",
        translation: "No dormí bien anoche."
      },
      {
        id: 'spa48',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Who ___ you meet at the party?',
        options: [{ text: 'did', isCorrect: true }, { text: 'were', isCorrect: false }, { text: 'do', isCorrect: false }],
        explanation: "Cuando 'who' es el objeto, se usa el auxiliar 'did'.",
        translation: "¿A quién conociste en la fiesta?"
      },
      {
        id: 'spa49',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ a lot of photos on our trip.',
        options: [{ text: 'taked', isCorrect: false }, { text: 'took', isCorrect: true }, { text: 'take', isCorrect: false }],
        explanation: "'Took' es el pasado simple del verbo irregular 'take'.",
        translation: "Hicimos muchas fotos en nuestro viaje."
      },
      {
        id: 'spa50',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ know what to say.',
        options: [{ text: "didn't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "wasn't", isCorrect: false }],
        explanation: "Para negar con 'she' en pasado, se usa 'didn't' y el verbo en su forma base (know).",
        translation: "Ella no supo qué decir."
      }
    ],
  },
  {
    id: 'present-perfect',
    title: 'Presente Perfecto (have/has)',
    description: 'Conecta el pasado con el presente. Se enfoca en experiencias y resultados.',
    icon: ChatBubbleLeftRightIcon,
    formula: {
      affirmative: 'Sujeto + have/has + Partcipio',
      negative: 'Sujeto + have/has not + Partcipio',
      interrogative: 'Have/Has + Sujeto + Partcipio?',
    },
    questions: [
        // Original 15 questions
        {
            id: 'pp1',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'I have ___ to London twice.',
            options: [{ text: 'be', isCorrect: false }, { text: 'been', isCorrect: true }, { text: 'was', isCorrect: false }],
            explanation: "El presente perfecto se forma con 'have/has' + el participio pasado del verbo. 'Been' es el participio de 'be'.",
            translation: "He estado en Londres dos veces."
        },
        {
            id: 'pp2',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'She has not ___ feeling well recently.',
            options: [{ text: 'be', isCorrect: false }, { text: 'was', isCorrect: false }, { text: 'been', isCorrect: true }],
            explanation: "Para negar, se añade 'not' después de 'have/has'. Se sigue usando el participio pasado 'been'.",
            translation: "Ella no se ha sentido bien recientemente."
        },
        {
            id: 'pp3',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ you ever been to Japan?',
            options: [{ text: 'Have', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Are', isCorrect: false }],
            explanation: "Para preguntar, se coloca 'Have/Has' al principio de la oración, antes del sujeto.",
            translation: "¿Alguna vez has estado en Japón?"
        },
        {
          id: 'pp4',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'They have ___ their homework.',
          options: [{ text: 'finish', isCorrect: false }, { text: 'finishing', isCorrect: false }, { text: 'finished', isCorrect: true }],
          explanation: "El presente perfecto usa 'have' + el participio pasado del verbo. El participio de 'finish' es 'finished'.",
          translation: "Ellos han terminado su tarea."
        },
        {
          id: 'pp5',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Negative',
          sentence: 'He ___ eaten breakfast yet.',
          options: [{ text: "didn't", isCorrect: false }, { text: "hasn't", isCorrect: true }, { text: "isn't", isCorrect: false }],
          explanation: "La negación para 'he' en presente perfecto es 'has not' o 'hasn't'.",
          translation: "Él no ha desayunado todavía."
        },
        {
          id: 'pp6',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Interrogative',
          sentence: '___ she ever traveled abroad?',
          options: [{ text: 'Did', isCorrect: false }, { text: 'Is', isCorrect: false }, { text: 'Has', isCorrect: true }],
          explanation: "Las preguntas con 'she' en presente perfecto comienzan con 'Has'.",
          translation: "¿Ha viajado ella al extranjero alguna vez?"
        },
        {
          id: 'pp7',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'I have ___ this book before.',
          options: [{ text: 'readed', isCorrect: false }, { text: 'reading', isCorrect: false }, { text: 'read', isCorrect: true }],
          explanation: "El participio pasado del verbo irregular 'read' se escribe igual, 'read', pero se pronuncia diferente.",
          translation: "He leído este libro antes."
        },
        {
          id: 'pp8',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Negative',
          sentence: 'We ___ seen that movie.',
          options: [{ text: "didn't", isCorrect: false }, { text: "haven't", isCorrect: true }, { text: "aren't", isCorrect: false }],
          explanation: "La negación para 'we' en presente perfecto es 'have not' o 'haven't'.",
          translation: "No hemos visto esa película."
        },
        {
          id: 'pp9',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Interrogative',
          sentence: 'How long ___ you lived here?',
          options: [{ text: 'did', isCorrect: false }, { text: 'are', isCorrect: false }, { text: 'have', isCorrect: true }],
          explanation: "Para preguntar por duración hasta el presente, se usa 'have' en la estructura del presente perfecto.",
          translation: "¿Cuánto tiempo has vivido aquí?"
        },
        {
          id: 'pp10',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'It has ___ a lot this week.',
          options: [{ text: 'rained', isCorrect: true }, { text: 'rain', isCorrect: false }, { text: 'raining', isCorrect: false }],
          explanation: "Se usa 'has' + el participio pasado 'rained' para describir una acción que ocurrió durante un periodo que llega hasta el presente.",
          translation: "Ha llovido mucho esta semana."
        },
        {
          id: 'pp11',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Negative',
          sentence: 'I ___ been to this restaurant before.',
          options: [{ text: "didn't", isCorrect: false }, { text: "haven't", isCorrect: true }, { text: "wasn't", isCorrect: false }],
          explanation: "La negación para 'I' en presente perfecto es 'have not' o 'haven't'.",
          translation: "No he estado en este restaurante antes."
        },
        {
          id: 'pp12',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Interrogative',
          sentence: '___ you finished your meal?',
          options: [{ text: 'Did', isCorrect: false }, { text: 'Have', isCorrect: true }, { text: 'Do', isCorrect: false }],
          explanation: "Para preguntar si una acción reciente ha terminado, se usa 'Have' con 'you'.",
          translation: "¿Has terminado tu comida?"
        },
        {
          id: 'pp13',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'She has ___ her leg.',
          options: [{ text: 'broke', isCorrect: false }, { text: 'broken', isCorrect: true }, { text: 'breaked', isCorrect: false }],
          explanation: "'Broken' es el participio pasado del verbo irregular 'break'.",
          translation: "Ella se ha roto la pierna."
        },
        {
          id: 'pp14',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Negative',
          sentence: 'They ___ arrived yet.',
          options: [{ text: "didn't", isCorrect: false }, { text: "haven't", isCorrect: true }, { text: "aren't", isCorrect: false }],
          explanation: "La negación para 'they' en presente perfecto es 'haven't'. 'Yet' se usa a menudo en oraciones negativas.",
          translation: "Ellos no han llegado todavía."
        },
        {
          id: 'pp15',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Interrogative',
          sentence: 'Where ___ he been?',
          options: [{ text: 'did', isCorrect: false }, { text: 'has', isCorrect: true }, { text: 'is', isCorrect: false }],
          explanation: "En preguntas con 'he' en presente perfecto, se usa 'has' antes del sujeto.",
          translation: "¿Dónde ha estado él?"
        },
      // Additional 35 questions
        {
            id: 'pp16',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'We have ___ the new Marvel movie.',
            options: [{ text: 'saw', isCorrect: false }, { text: 'seen', isCorrect: true }, { text: 'see', isCorrect: false }],
            explanation: "'Seen' es el participio pasado del verbo irregular 'see'.",
            translation: "Hemos visto la nueva película de Marvel."
        },
        {
            id: 'pp17',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'I ___ spoken to him today.',
            options: [{ text: "haven't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "don't", isCorrect: false }],
            explanation: "La negación para 'I' en presente perfecto es 'haven't'.",
            translation: "No he hablado con él hoy."
        },
        {
            id: 'pp18',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ the post arrived yet?',
            options: [{ text: 'Did', isCorrect: false }, { text: 'Has', isCorrect: true }, { text: 'Does', isCorrect: false }],
            explanation: "'The post' (it) es singular, por lo que la pregunta comienza con 'Has'.",
            translation: "¿Ha llegado ya el correo?"
        },
        {
            id: 'pp19',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'He has just ___ his lunch.',
            options: [{ text: 'ate', isCorrect: false }, { text: 'eaten', isCorrect: true }, { text: 'eat', isCorrect: false }],
            explanation: "'Eaten' es el participio pasado del verbo irregular 'eat'. 'Just' indica una acción muy reciente.",
            translation: "Él acaba de almorzar."
        },
        {
            id: 'pp20',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'She ___ found her keys.',
            options: [{ text: "hasn't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "isn't", isCorrect: false }],
            explanation: "La negación para 'she' en presente perfecto es 'hasn't'.",
            translation: "Ella no ha encontrado sus llaves."
        },
        {
            id: 'pp21',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: 'What ___ you done?',
            options: [{ text: 'have', isCorrect: true }, { text: 'did', isCorrect: false }, { text: 'do', isCorrect: false }],
            explanation: "Para preguntar sobre una acción pasada con resultado en el presente, se usa 'have'.",
            translation: "¿Qué has hecho?"
        },
        {
            id: 'pp22',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'They have ___ to a new house.',
            options: [{ text: 'moved', isCorrect: true }, { text: 'move', isCorrect: false }, { text: 'did move', isCorrect: false }],
            explanation: "'Move' es un verbo regular. Su participio pasado es 'moved'.",
            translation: "Se han mudado a una casa nueva."
        },
        {
            id: 'pp23',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'We ___ heard from them in a long time.',
            options: [{ text: "haven't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "weren't", isCorrect: false }],
            explanation: "La negación para 'we' en presente perfecto es 'haven't'.",
            translation: "No hemos sabido de ellos en mucho tiempo."
        },
        {
            id: 'pp24',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: 'How many times ___ you been there?',
            options: [{ text: 'have', isCorrect: true }, { text: 'did', isCorrect: false }, { text: 'were', isCorrect: false }],
            explanation: "Se usa el presente perfecto para preguntar sobre el número de veces que se ha hecho algo.",
            translation: "¿Cuántas veces has estado allí?"
        },
        {
            id: 'pp25',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'I have ___ my wallet.',
            options: [{ text: 'lost', isCorrect: true }, { text: 'losed', isCorrect: false }, { text: 'lose', isCorrect: false }],
            explanation: "'Lost' es tanto el pasado simple como el participio pasado de 'lose'.",
            translation: "He perdido mi cartera."
        },
        {
            id: 'pp26',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'He ___ visited his grandparents this month.',
            options: [{ text: "hasn't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "doesn't", isCorrect: false }],
            explanation: "La negación para 'he' en presente perfecto es 'hasn't'.",
            translation: "Él no ha visitado a sus abuelos este mes."
        },
        {
            id: 'pp27',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ she told you the news?',
            options: [{ text: 'Has', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Does', isCorrect: false }],
            explanation: "Las preguntas con 'she' en presente perfecto empiezan con 'Has'.",
            translation: "¿Te ha contado ella la noticia?"
        },
        {
            id: 'pp28',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'You have ___ a lot since the last time I saw you.',
            options: [{ text: 'changed', isCorrect: true }, { text: 'change', isCorrect: false }, { text: 'did change', isCorrect: false }],
            explanation: "'Change' es un verbo regular, su participio pasado es 'changed'.",
            translation: "Has cambiado mucho desde la última vez que te vi."
        },
        {
            id: 'pp29',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'They ___ decided where to go yet.',
            options: [{ text: "haven't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "don't", isCorrect: false }],
            explanation: "La negación para 'they' es 'haven't'. 'Yet' se usa a menudo al final de oraciones negativas.",
            translation: "Todavía no han decidido a dónde ir."
        },
        {
            id: 'pp30',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ you ever eaten sushi?',
            options: [{ text: 'Have', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Do', isCorrect: false }],
            explanation: "'Ever' se usa en preguntas de presente perfecto para preguntar sobre experiencias de vida.",
            translation: "¿Has comido sushi alguna vez?"
        },
        {
            id: 'pp31',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'The company has ___ a lot this year.',
            options: [{ text: 'grown', isCorrect: true }, { text: 'grew', isCorrect: false }, { text: 'growed', isCorrect: false }],
            explanation: "'Grown' es el participio pasado del verbo irregular 'grow'.",
            translation: "La empresa ha crecido mucho este año."
        },
        {
            id: 'pp32',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'I ___ received any emails from her.',
            options: [{ text: "haven't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "don't", isCorrect: false }],
            explanation: "La negación para 'I' en presente perfecto es 'haven't'.",
            translation: "No he recibido ningún correo de ella."
        },
        {
            id: 'pp33',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: 'Why ___ he left so early?',
            options: [{ text: 'has', isCorrect: true }, { text: 'did', isCorrect: false }, { text: 'does', isCorrect: false }],
            explanation: "En preguntas con 'he' en presente perfecto, se usa 'has'.",
            translation: "¿Por qué se ha ido tan temprano?"
        },
        {
            id: 'pp34',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'She has ___ a beautiful poem.',
            options: [{ text: 'written', isCorrect: true }, { text: 'wrote', isCorrect: false }, { text: 'writed', isCorrect: false }],
            explanation: "'Written' es el participio pasado del verbo irregular 'write'.",
            translation: "Ella ha escrito un hermoso poema."
        },
        {
            id: 'pp35',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'We ___ been waiting for long.',
            options: [{ text: "haven't", isCorrect: true }, { text: "weren't", isCorrect: false }, { text: "didn't", isCorrect: false }],
            explanation: "La negación para 'we' es 'haven't'.",
            translation: "No hemos estado esperando mucho tiempo."
        },
        {
            id: 'pp36',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ it stopped raining?',
            options: [{ text: 'Has', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Does', isCorrect: false }],
            explanation: "Para preguntar sobre una acción reciente con 'it', se usa 'Has'.",
            translation: "¿Ha dejado de llover?"
        },
        {
            id: 'pp37',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'I have never ___ a lie to you.',
            options: [{ text: 'told', isCorrect: true }, { text: 'telled', isCorrect: false }, { text: 'say', isCorrect: false }],
            explanation: "'Told' es el participio pasado de 'tell'. 'Never' se usa para negar experiencias.",
            translation: "Nunca te he dicho una mentira."
        },
        {
            id: 'pp38',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'He ___ cleaned his room.',
            options: [{ text: "hasn't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "doesn't", isCorrect: false }],
            explanation: "La negación para 'he' en presente perfecto es 'hasn't'.",
            translation: "Él no ha limpiado su habitación."
        },
        {
            id: 'pp39',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: 'What books ___ you read this year?',
            options: [{ text: 'have', isCorrect: true }, { text: 'did', isCorrect: false }, { text: 'do', isCorrect: false }],
            explanation: "Se usa presente perfecto para hablar de un periodo de tiempo que aún no ha terminado (this year).",
            translation: "¿Qué libros has leído este año?"
        },
        {
            id: 'pp40',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'They have ___ a lot of money to charity.',
            options: [{ text: 'given', isCorrect: true }, { text: 'gave', isCorrect: false }, { text: 'gived', isCorrect: false }],
            explanation: "'Given' es el participio pasado del verbo irregular 'give'.",
            translation: "Han donado mucho dinero a la caridad."
        },
        {
            id: 'pp41',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'The flight ___ landed yet.',
            options: [{ text: "hasn't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "isn't", isCorrect: false }],
            explanation: "'The flight' (it) es singular, su negación es 'hasn't'.",
            translation: "El vuelo no ha aterrizado todavía."
        },
        {
            id: 'pp42',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ you bought the tickets?',
            options: [{ text: 'Have', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Do', isCorrect: false }],
            explanation: "Para preguntar por una acción reciente con 'you', se usa 'Have'.",
            translation: "¿Has comprado las entradas?"
        },
        {
            id: 'pp43',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'Someone has ___ my sandwich!',
            options: [{ text: 'eaten', isCorrect: true }, { text: 'ate', isCorrect: false }, { text: 'eat', isCorrect: false }],
            explanation: "'Someone' es singular. El participio pasado de 'eat' es 'eaten'.",
            translation: "¡Alguien se ha comido mi sándwich!"
        },
        {
            id: 'pp44',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'I ___ forgotten your name.',
            options: [{ text: "haven't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "don't", isCorrect: false }],
            explanation: "La negación para 'I' en presente perfecto es 'haven't'.",
            translation: "No he olvidado tu nombre."
        },
        {
            id: 'pp45',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: 'Where ___ they gone?',
            options: [{ text: 'have', isCorrect: true }, { text: 'did', isCorrect: false }, { text: 'are', isCorrect: false }],
            explanation: "En preguntas con 'they' en presente perfecto, se usa 'have'.",
            translation: "¿A dónde han ido?"
        },
        {
            id: 'pp46',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'He has ___ to play the piano.',
            options: [{ text: 'learned', isCorrect: true }, { text: 'learnt', isCorrect: true }, { text: 'did learn', isCorrect: false }],
            explanation: "Tanto 'learned' (más común en inglés americano) como 'learnt' (más común en inglés británico) son participios pasados correctos de 'learn'.",
            translation: "Él ha aprendido a tocar el piano."
        },
        {
            id: 'pp47',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'She ___ called me back.',
            options: [{ text: "hasn't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "doesn't", isCorrect: false }],
            explanation: "La negación para 'she' es 'hasn't'.",
            translation: "Ella no me ha devuelto la llamada."
        },
        {
            id: 'pp48',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ we met before?',
            options: [{ text: 'Have', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Do', isCorrect: false }],
            explanation: "Pregunta común para saber si conoces a alguien de antes.",
            translation: "¿Nos hemos conocido antes?"
        },
        {
            id: 'pp49',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'The results have just been ___.',
            options: [{ text: 'announced', isCorrect: true }, { text: 'announce', isCorrect: false }, { text: 'did announce', isCorrect: false }],
            explanation: "Esta es la voz pasiva del presente perfecto. Se usa 'been' + participio pasado.",
            translation: "Los resultados acaban de ser anunciados."
        },
        {
            id: 'pp50',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'They ___ finished the race.',
            options: [{ text: "haven't", isCorrect: true }, { text: "didn't", isCorrect: false }, { text: "don't", isCorrect: false }],
            explanation: "La negación para 'they' es 'haven't'.",
            translation: "No han terminado la carrera."
        }
    ],
  },
  {
    id: 'comparatives-superlatives',
    title: 'Comparativos y Superlativos',
    description: 'Compara personas, lugares y cosas.',
    icon: ArrowTrendingUpIcon,
    formula: {
      affirmative: 'Comparativo: Adj-er / more + Adj',
      negative: 'Superlativo: the Adj-est / the most + Adj',
      interrogative: 'Irregulares: good > better > best',
    },
    questions: [
        // Original 15 questions
        {
            id: 'cs1',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'This car is ___ than that one.',
            options: [{ text: 'faster', isCorrect: true }, { text: 'fastest', isCorrect: false }, { text: 'fast', isCorrect: false }],
            explanation: "Para comparar dos cosas, se usa el adjetivo comparativo (con -er para adjetivos cortos).",
            translation: "Este coche es más rápido que ese."
        },
        {
            id: 'cs2',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'She is the ___ person in our class.',
            options: [{ text: 'more intelligent', isCorrect: false }, { text: 'intelligent', isCorrect: false }, { text: 'most intelligent', isCorrect: true }],
            explanation: "Para superlativos con adjetivos largos, se usa 'the most' antes del adjetivo.",
            translation: "Ella es la persona más inteligente de nuestra clase."
        },
        {
            id: 'cs3',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'Mount Everest is the ___ mountain in the world.',
            options: [{ text: 'high', isCorrect: false }, { text: 'higher', isCorrect: false }, { text: 'highest', isCorrect: true }],
            explanation: "Para destacar una cualidad sobre todas las demás, se usa el superlativo (con -est para adjetivos cortos).",
            translation: "El Monte Everest es la montaña más alta del mundo."
        },
        {
          id: 'cs4',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'My sister is ___ than me.',
          options: [{ text: 'tallest', isCorrect: false }, { text: 'taller', isCorrect: true }, { text: 'tall', isCorrect: false }],
          explanation: "Para comparar dos personas con un adjetivo corto como 'tall', se añade '-er' para formar el comparativo.",
          translation: "Mi hermana es más alta que yo."
        },
        {
          id: 'cs5',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ movie I have ever seen.',
          options: [{ text: 'worse', isCorrect: false }, { text: 'badder', isCorrect: false }, { text: 'worst', isCorrect: true }],
          explanation: "'Worst' es el superlativo irregular del adjetivo 'bad'. Se usa para indicar el grado máximo.",
          translation: "Esta es la peor película que he visto."
        },
        {
          id: 'cs6',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This exercise is ___ than the last one.',
          options: [{ text: 'most difficult', isCorrect: false }, { text: 'more difficult', isCorrect: true }, { text: 'difficult', isCorrect: false }],
          explanation: "Para adjetivos largos como 'difficult', se usa 'more' para formar el comparativo.",
          translation: "Este ejercicio es más difícil que el anterior."
        },
        {
          id: 'cs7',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'He is the ___ student in the school.',
          options: [{ text: 'goodest', isCorrect: false }, { text: 'better', isCorrect: false }, { text: 'best', isCorrect: true }],
          explanation: "'Best' es el superlativo irregular de 'good'. Se usa para destacar a alguien sobre el resto.",
          translation: "Él es el mejor estudiante de la escuela."
        },
        {
          id: 'cs8',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'A lion is ___ than a cat.',
          options: [{ text: 'big', isCorrect: false }, { text: 'biggest', isCorrect: false }, { text: 'bigger', isCorrect: true }],
          explanation: "Para adjetivos cortos de una sílaba terminados en consonante-vocal-consonante, se duplica la última consonante y se añade '-er'.",
          translation: "Un león es más grande que un gato."
        },
        {
          id: 'cs9',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'It was the ___ day of my life.',
          options: [{ text: 'happier', isCorrect: false }, { text: 'happy', isCorrect: false }, { text: 'happiest', isCorrect: true }],
          explanation: "Para adjetivos de dos sílabas terminados en '-y', se cambia la 'y' por 'i' y se añade '-est' para el superlativo.",
          translation: "Fue el día más feliz de mi vida."
        },
        {
          id: 'cs10',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Your explanation is ___ than mine.',
          options: [{ text: 'clear', isCorrect: false }, { text: 'clearer', isCorrect: true }, { text: 'clearest', isCorrect: false }],
          explanation: "Se añade '-er' al adjetivo corto 'clear' para formar el comparativo.",
          translation: "Tu explicación es más clara que la mía."
        },
        {
          id: 'cs11',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ building in the city.',
          options: [{ text: 'tallest', isCorrect: true }, { text: 'taller', isCorrect: false }, { text: 'tall', isCorrect: false }],
          explanation: "Para adjetivos cortos como 'tall', el superlativo se forma añadiendo '-est'.",
          translation: "Este es el edificio más alto de la ciudad."
        },
        {
          id: 'cs12',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The weather today is ___ than yesterday.',
          options: [{ text: 'bad', isCorrect: false }, { text: 'worst', isCorrect: false }, { text: 'worse', isCorrect: true }],
          explanation: "'Worse' es el comparativo irregular de 'bad'.",
          translation: "El tiempo hoy está peor que ayer."
        },
        {
          id: 'cs13',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'I think that health is ___ than money.',
          options: [{ text: 'important', isCorrect: false }, { text: 'most important', isCorrect: false }, { text: 'more important', isCorrect: true }],
          explanation: "Para adjetivos largos como 'important', se usa 'more' para formar el comparativo.",
          translation: "Creo que la salud es más importante que el dinero."
        },
        {
          id: 'cs14',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ meal I have ever had.',
          options: [{ text: 'best', isCorrect: true }, { text: 'better', isCorrect: false }, { text: 'good', isCorrect: false }],
          explanation: "'Best' es el superlativo irregular de 'good'.",
          translation: "Esta es la mejor comida que he probado."
        },
        {
          id: 'cs15',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'My suitcase is ___ than yours.',
          options: [{ text: 'heavier', isCorrect: true }, { text: 'heaviest', isCorrect: false }, { text: 'heavy', isCorrect: false }],
          explanation: "Para adjetivos terminados en '-y' como 'heavy', se cambia la 'y' por 'i' y se añade '-er' para el comparativo.",
          translation: "Mi maleta es más pesada que la tuya."
        },
      // Additional 35 questions
        {
          id: 'cs16',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This book is ___ than the one I read last week.',
          options: [{ text: 'more interesting', isCorrect: true }, { text: 'most interesting', isCorrect: false }, { text: 'interesting', isCorrect: false }],
          explanation: "Para adjetivos largos como 'interesting', se usa 'more' para formar el comparativo.",
          translation: "Este libro es más interesante que el que leí la semana pasada."
        },
        {
          id: 'cs17',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'He is the ___ man I know.',
          options: [{ text: 'funniest', isCorrect: true }, { text: 'funnier', isCorrect: false }, { text: 'funny', isCorrect: false }],
          explanation: "Para adjetivos terminados en -y, se cambia la 'y' por 'i' y se añade -est para el superlativo.",
          translation: "Él es el hombre más divertido que conozco."
        },
        {
          id: 'cs18',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The blue whale is the ___ animal on Earth.',
          options: [{ text: 'largest', isCorrect: true }, { text: 'larger', isCorrect: false }, { text: 'large', isCorrect: false }],
          explanation: "Para adjetivos cortos terminados en -e como 'large', solo se añade -st para el superlativo.",
          translation: "La ballena azul es el animal más grande de la Tierra."
        },
        {
          id: 'cs19',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'I feel ___ today than I did yesterday.',
          options: [{ text: 'better', isCorrect: true }, { text: 'best', isCorrect: false }, { text: 'good', isCorrect: false }],
          explanation: "'Better' es el comparativo irregular de 'good'.",
          translation: "Me siento mejor hoy que ayer."
        },
        {
          id: 'cs20',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ dress in the shop.',
          options: [{ text: 'most expensive', isCorrect: true }, { text: 'more expensive', isCorrect: false }, { text: 'expensiver', isCorrect: false }],
          explanation: "Para adjetivos largos como 'expensive', se usa 'the most' para el superlativo.",
          translation: "Este es el vestido más caro de la tienda."
        },
        {
          id: 'cs21',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'My car is not as ___ as yours.',
          options: [{ text: 'fast', isCorrect: true }, { text: 'faster', isCorrect: false }, { text: 'fastest', isCorrect: false }],
          explanation: "La estructura 'as ... as' se usa para comparar igualdad. Se usa el adjetivo en su forma base.",
          translation: "Mi coche no es tan rápido como el tuyo."
        },
        {
          id: 'cs22',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The journey was ___ than we expected.',
          options: [{ text: 'longer', isCorrect: true }, { text: 'longest', isCorrect: false }, { text: 'long', isCorrect: false }],
          explanation: "Se añade '-er' al adjetivo corto 'long' para formar el comparativo.",
          translation: "El viaje fue más largo de lo que esperábamos."
        },
        {
          id: 'cs23',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Which is the ___ city in your country?',
          options: [{ text: 'biggest', isCorrect: true }, { text: 'bigger', isCorrect: false }, { text: 'big', isCorrect: false }],
          explanation: "Para adjetivos cortos como 'big', se duplica la consonante final y se añade -est para el superlativo.",
          translation: "¿Cuál es la ciudad más grande de tu país?"
        },
        {
          id: 'cs24',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'She is much ___ at tennis than I am.',
          options: [{ text: 'better', isCorrect: true }, { text: 'best', isCorrect: false }, { text: 'gooder', isCorrect: false }],
          explanation: "'Better' es el comparativo irregular de 'good'. Se puede intensificar con 'much'.",
          translation: "Ella es mucho mejor en tenis que yo."
        },
        {
          id: 'cs25',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ coffee I have ever tasted.',
          options: [{ text: 'worst', isCorrect: true }, { text: 'worse', isCorrect: false }, { text: 'bad', isCorrect: false }],
          explanation: "'Worst' es el superlativo irregular de 'bad'.",
          translation: "Este es el peor café que he probado."
        },
        {
          id: 'cs26',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'It is ___ to be safe than sorry.',
          options: [{ text: 'better', isCorrect: true }, { text: 'best', isCorrect: false }, { text: 'good', isCorrect: false }],
          explanation: "Esta es una expresión fija que usa el comparativo de 'good'.",
          translation: "Es mejor prevenir que curar (literalmente: estar seguro que arrepentido)."
        },
        {
          id: 'cs27',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The situation is getting ___ and ___.',
          options: [{ text: 'worse / worse', isCorrect: true }, { text: 'badder / badder', isCorrect: false }, { text: 'worst / worst', isCorrect: false }],
          explanation: "Para indicar un cambio continuo, se puede repetir el comparativo.",
          translation: "La situación está empeorando cada vez más."
        },
        {
          id: 'cs28',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Your house is ___ from the station than mine.',
          options: [{ text: 'further', isCorrect: true }, { text: 'farther', isCorrect: true }, { text: 'farest', isCorrect: false }],
          explanation: "'Further' y 'farther' son comparativos irregulares de 'far'. Ambos son correctos aquí.",
          translation: "Tu casa está más lejos de la estación que la mía."
        },
        {
          id: 'cs29',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'He is the ___ person I have ever met.',
          options: [{ text: 'kindest', isCorrect: true }, { text: 'kinder', isCorrect: false }, { text: 'most kind', isCorrect: false }],
          explanation: "Para el adjetivo corto 'kind', el superlativo se forma añadiendo -est.",
          translation: "Es la persona más amable que he conocido."
        },
        {
          id: 'cs30',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is probably the ___ way to do it.',
          options: [{ text: 'easiest', isCorrect: true }, { text: 'easier', isCorrect: false }, { text: 'most easy', isCorrect: false }],
          explanation: "Para adjetivos terminados en -y como 'easy', se cambia a 'i' y se añade -est.",
          translation: "Esta es probablemente la forma más fácil de hacerlo."
        },
        {
          id: 'cs31',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The exam was ___ difficult than I thought.',
          options: [{ text: 'more', isCorrect: true }, { text: 'most', isCorrect: false }, { text: 'much', isCorrect: false }],
          explanation: "Con adjetivos largos como 'difficult', se usa 'more' para comparar.",
          translation: "El examen fue más difícil de lo que pensaba."
        },
        {
          id: 'cs32',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'She is one of the ___ actresses in Hollywood.',
          options: [{ text: 'most famous', isCorrect: true }, { text: 'more famous', isCorrect: false }, { text: 'famouser', isCorrect: false }],
          explanation: "Se usa 'the most' con adjetivos largos como 'famous' para formar el superlativo.",
          translation: "Es una de las actrices más famosas de Hollywood."
        },
        {
          id: 'cs33',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Today is the ___ day of the year.',
          options: [{ text: 'hottest', isCorrect: true }, { text: 'hotter', isCorrect: false }, { text: 'most hot', isCorrect: false }],
          explanation: "Para 'hot', se duplica la 't' y se añade -est para el superlativo.",
          translation: "Hoy es el día más caluroso del año."
        },
        {
          id: 'cs34',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This brand is ___ than the other one.',
          options: [{ text: 'cheaper', isCorrect: true }, { text: 'cheapest', isCorrect: false }, { text: 'cheap', isCorrect: false }],
          explanation: "Se añade '-er' al adjetivo corto 'cheap' para el comparativo.",
          translation: "Esta marca es más barata que la otra."
        },
        {
          id: 'cs35',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'He is the ___ person on the team.',
          options: [{ text: 'strongest', isCorrect: true }, { text: 'stronger', isCorrect: false }, { text: 'most strong', isCorrect: false }],
          explanation: "Para 'strong', se añade -est para el superlativo.",
          translation: "Es la persona más fuerte del equipo."
        },
        {
          id: 'cs36',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The traffic is ___ in the morning.',
          options: [{ text: 'worse', isCorrect: true }, { text: 'worst', isCorrect: false }, { text: 'bad', isCorrect: false }],
          explanation: "Se usa el comparativo 'worse' para comparar el tráfico en dos momentos diferentes (mañana vs. otro momento).",
          translation: "El tráfico es peor por la mañana."
        },
        {
          id: 'cs37',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ comfortable sofa.',
          options: [{ text: 'most', isCorrect: true }, { text: 'more', isCorrect: false }, { text: 'much', isCorrect: false }],
          explanation: "Se usa 'the most' con el adjetivo largo 'comfortable' para formar el superlativo.",
          translation: "Este es el sofá más cómodo."
        },
        {
          id: 'cs38',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Her results were ___ than expected.',
          options: [{ text: 'better', isCorrect: true }, { text: 'best', isCorrect: false }, { text: 'good', isCorrect: false }],
          explanation: "'Better' es el comparativo de 'good'.",
          translation: "Sus resultados fueron mejores de lo esperado."
        },
        {
          id: 'cs39',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Russia is the ___ country in the world.',
          options: [{ text: 'largest', isCorrect: true }, { text: 'larger', isCorrect: false }, { text: 'large', isCorrect: false }],
          explanation: "Se usa el superlativo 'largest' para destacar a Rusia sobre todos los demás países.",
          translation: "Rusia es el país más grande del mundo."
        },
        {
          id: 'cs40',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This new phone model is slightly ___ than the old one.',
          options: [{ text: 'heavier', isCorrect: true }, { text: 'heaviest', isCorrect: false }, { text: 'heavy', isCorrect: false }],
          explanation: "Para 'heavy', se cambia la 'y' por 'i' y se añade -er para el comparativo.",
          translation: "Este nuevo modelo de teléfono es ligeramente más pesado que el antiguo."
        },
        {
          id: 'cs41',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Who is the ___ person you know?',
          options: [{ text: 'oldest', isCorrect: true }, { text: 'elder', isCorrect: false }, { text: 'older', isCorrect: false }],
          explanation: "'Oldest' es el superlativo de 'old'. 'Elder' se usa para miembros de la familia y no va seguido de 'than'.",
          translation: "¿Quién es la persona de más edad que conoces?"
        },
        {
          id: 'cs42',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'I am not as ___ as my brother.',
          options: [{ text: 'patient', isCorrect: true }, { text: 'more patient', isCorrect: false }, { text: 'most patient', isCorrect: false }],
          explanation: "En la estructura 'as ... as', se usa el adjetivo en su forma base.",
          translation: "No soy tan paciente como mi hermano."
        },
        {
          id: 'cs43',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ part of the project.',
          options: [{ text: 'most important', isCorrect: true }, { text: 'more important', isCorrect: false }, { text: 'importantest', isCorrect: false }],
          explanation: "Para el adjetivo largo 'important', se usa 'the most' para el superlativo.",
          translation: "Esta es la parte más importante del proyecto."
        },
        {
          id: 'cs44',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Your cooking is ___ than mine.',
          options: [{ text: 'better', isCorrect: true }, { text: 'best', isCorrect: false }, { text: 'good', isCorrect: false }],
          explanation: "Se usa el comparativo 'better' para comparar la cocina de dos personas.",
          translation: "Tu cocina es mejor que la mía."
        },
        {
          id: 'cs45',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ joke I have ever heard!',
          options: [{ text: 'silliest', isCorrect: true }, { text: 'sillier', isCorrect: false }, { text: 'silly', isCorrect: false }],
          explanation: "Para adjetivos terminados en -y como 'silly', se cambia a 'i' y se añade -est para el superlativo.",
          translation: "¡Es el chiste más tonto que he oído!"
        },
        {
          id: 'cs46',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The Pacific Ocean is ___ than the Atlantic Ocean.',
          options: [{ text: 'deeper', isCorrect: true }, { text: 'deepest', isCorrect: false }, { text: 'deep', isCorrect: false }],
          explanation: "Para el adjetivo corto 'deep', se añade -er para formar el comparativo.",
          translation: "El Océano Pacífico es más profundo que el Océano Atlántico."
        },
        {
          id: 'cs47',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'It was the ___ performance of the night.',
          options: [{ text: 'best', isCorrect: true }, { text: 'better', isCorrect: false }, { text: 'good', isCorrect: false }],
          explanation: "'Best' es el superlativo irregular de 'good'.",
          translation: "Fue la mejor actuación de la noche."
        },
        {
          id: 'cs48',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'The new design is ___ than the old one.',
          options: [{ text: 'more modern', isCorrect: true }, { text: 'most modern', isCorrect: false }, { text: 'moderner', isCorrect: false }],
          explanation: "Se usa 'more' con 'modern' para formar el comparativo.",
          translation: "El nuevo diseño es más moderno que el antiguo."
        },
        {
          id: 'cs49',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'He is the ___ player on the field.',
          options: [{ text: 'fastest', isCorrect: true }, { text: 'faster', isCorrect: false }, { text: 'fast', isCorrect: false }],
          explanation: "Se añade '-est' al adjetivo corto 'fast' para el superlativo.",
          translation: "Es el jugador más rápido del campo."
        },
        {
          id: 'cs50',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This winter is ___ than last winter.',
          options: [{ text: 'colder', isCorrect: true }, { text: 'coldest', isCorrect: false }, { text: 'cold', isCorrect: false }],
          explanation: "Para el adjetivo corto 'cold', se añade -er para el comparativo.",
          translation: "Este invierno es más frío que el invierno pasado."
        }
    ]
  },
  {
    id: 'forming-questions',
    title: 'Aprende a Preguntar',
    description: 'Construye preguntas correctas en diferentes tiempos verbales.',
    icon: QuestionMarkCircleIcon,
    formula: {
      affirmative: 'Yes/No: Aux + Sujeto + Verbo?',
      negative: 'WH- : QW + Aux + Sujeto + Verbo?',
      interrogative: 'Subject Q: Who/What + Verbo?',
    },
    questions: [
        {
            id: 'fq1',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Interrogative',
            sentence: 'Statement: She works in a hospital. -> Ask where.',
            options: [
                { text: 'Where does she work?', isCorrect: true },
                { text: 'Where she works?', isCorrect: false },
                { text: 'Does she work where?', isCorrect: false },
            ],
            explanation: "Para preguntar con 'she' en presente simple, se usa 'Does' después de la palabra interrogativa (Where) y antes del sujeto.",
            translation: "Declaración: Ella trabaja en un hospital. -> Pregunta dónde. -> ¿Dónde trabaja ella?"
        },
        {
            id: 'fq2',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Interrogative',
            sentence: 'Statement: They went to the party. -> Ask if they went.',
            options: [
                { text: 'Did they go to the party?', isCorrect: true },
                { text: 'They did go to the party?', isCorrect: false },
                { text: 'Went they to the party?', isCorrect: false },
            ],
            explanation: "Para preguntas de sí/no en pasado simple, se usa 'Did' al principio, seguido del sujeto y el verbo en forma base.",
            translation: "Declaración: Fueron a la fiesta. -> Pregunta si fueron. -> ¿Fueron ellos a la fiesta?"
        },
        {
            id: 'fq3',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Interrogative',
            sentence: 'Statement: He is watching a movie. -> Ask what he is doing.',
            options: [
                { text: 'What is he watching?', isCorrect: true },
                { text: 'What he is watching?', isCorrect: false },
                { text: 'Is he watching what?', isCorrect: false },
            ],
            explanation: "En presente continuo, la estructura es: Palabra Interrogativa + is/are + sujeto + verbo-ing.",
            translation: "Declaración: Él está viendo una película. -> Pregunta qué está viendo. -> ¿Qué está viendo él?"
        },
        {
            id: 'fq4',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Interrogative',
            sentence: 'Statement: You have been to Paris. -> Ask if the person has been there.',
            options: [
                { text: 'Have you been to Paris?', isCorrect: true },
                { text: 'You have been to Paris?', isCorrect: false },
                { text: 'Did you been to Paris?', isCorrect: false },
            ],
            explanation: "Para preguntas de sí/no en presente perfecto, se invierte el sujeto y 'have/has'.",
            translation: "Declaración: Has estado en París. -> Pregunta si ha estado allí. -> ¿Has estado en París?"
        },
        {
            id: 'fq5',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Interrogative',
            sentence: 'Statement: The meeting starts at 9 AM. -> Ask what time.',
            options: [
                { text: 'What time does the meeting start?', isCorrect: true },
                { text: 'What time the meeting starts?', isCorrect: false },
                { text: 'Does the meeting start what time?', isCorrect: false },
            ],
            explanation: "Se usa 'does' para 'the meeting' (it) en presente simple, después de la frase interrogativa.",
            translation: "Declaración: La reunión empieza a las 9 AM. -> Pregunta a qué hora. -> ¿A qué hora empieza la reunión?"
        },
        // 45 more questions
        ...Array.from({ length: 45 }, (_, i) => {
          const questions = [
            // Simple Present
            // FIX: Add missing 'type' and 'form' properties to Question object.
            { id: 'fq6', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They live in Canada. -> Ask where.', options: [{ text: 'Where do they live?', isCorrect: true }, { text: 'Where they live?', isCorrect: false }, { text: 'Do they live where?', isCorrect: false }], explanation: "Se usa 'do' con 'they' en preguntas de presente simple.", translation: "¿Dónde viven ellos?" },
            { id: 'fq7', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He likes pizza. -> Ask if he likes it.', options: [{ text: 'Does he like pizza?', isCorrect: true }, { text: 'Do he like pizza?', isCorrect: false }, { text: 'He does like pizza?', isCorrect: false }], explanation: "Se usa 'Does' para preguntas de sí/no con 'he' en presente simple.", translation: "¿A él le gusta la pizza?" },
            // Simple Past
            { id: 'fq8', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She bought a new car. -> Ask what she bought.', options: [{ text: 'What did she buy?', isCorrect: true }, { text: 'What she bought?', isCorrect: false }, { text: 'Did she buy what?', isCorrect: false }], explanation: "En pasado simple, la estructura es QW + did + sujeto + verbo base.", translation: "¿Qué compró ella?" },
            { id: 'fq9', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I saw John yesterday. -> Ask who the person saw.', options: [{ text: 'Who did you see yesterday?', isCorrect: true }, { text: 'Who you saw yesterday?', isCorrect: false }, { text: 'Did you see who yesterday?', isCorrect: false }], explanation: "Se usa 'did' para preguntar sobre el objeto de la acción en pasado.", translation: "¿A quién viste ayer?" },
            // Present Continuous
            { id: 'fq10', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: We are going to the beach. -> Ask where we are going.', options: [{ text: 'Where are we going?', isCorrect: true }, { text: 'Where we are going?', isCorrect: false }, { text: 'Are we going where?', isCorrect: false }], explanation: "La estructura es QW + are + sujeto + verbo-ing.", translation: "¿A dónde vamos?" },
            { id: 'fq11', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: It is raining. -> Ask if it is raining.', options: [{ text: 'Is it raining?', isCorrect: true }, { text: 'It is raining?', isCorrect: false }, { text: 'Does it raining?', isCorrect: false }], explanation: "Para preguntas de sí/no, se invierte el sujeto y el verbo 'to be'.", translation: "¿Está lloviendo?" },
            // Present Perfect
            { id: 'fq12', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He has finished his work. -> Ask if he has finished.', options: [{ text: 'Has he finished his work?', isCorrect: true }, { text: 'He has finished his work?', isCorrect: false }, { text: 'Did he finished his work?', isCorrect: false }], explanation: "Se invierte 'has' y el sujeto para preguntas de sí/no en presente perfecto.", translation: "¿Ha terminado él su trabajo?" },
            { id: 'fq13', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They have lived here for five years. -> Ask how long.', options: [{ text: 'How long have they lived here?', isCorrect: true }, { text: 'How long they have lived here?', isCorrect: false }, { text: 'Have they lived here how long?', isCorrect: false }], explanation: "La estructura es QW + have + sujeto + participio.", translation: "¿Cuánto tiempo han vivido aquí?" },
            // Mixed
            { id: 'fq14', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The train arrived at 10 PM. -> Ask when.', options: [{ text: 'When did the train arrive?', isCorrect: true }, { text: 'When the train arrived?', isCorrect: false }, { text: 'Did the train arrive when?', isCorrect: false }], explanation: "Pregunta en pasado simple sobre el tiempo. Se usa 'did'.", translation: "¿Cuándo llegó el tren?" },
            { id: 'fq15', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She is crying because she is sad. -> Ask why.', options: [{ text: 'Why is she crying?', isCorrect: true }, { text: 'Why she is crying?', isCorrect: false }, { text: 'Is she crying why?', isCorrect: false }], explanation: "Pregunta en presente continuo sobre la razón.", translation: "¿Por qué está llorando?" },
            { id: 'fq16', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: Someone broke the window. -> Ask who.', options: [{ text: 'Who broke the window?', isCorrect: true }, { text: 'Who did break the window?', isCorrect: false }, { text: 'Did who break the window?', isCorrect: false }], explanation: "Cuando 'Who' es el sujeto, no se usa 'did'. El verbo va en pasado.", translation: "¿Quién rompió la ventana?" },
            { id: 'fq17', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I need some help. -> Ask what the person needs.', options: [{ text: 'What do you need?', isCorrect: true }, { text: 'What you need?', isCorrect: false }, { text: 'Do you need what?', isCorrect: false }], explanation: "Pregunta en presente simple sobre el objeto. Se usa 'do'.", translation: "¿Qué necesitas?" },
            { id: 'fq18', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They have visited Italy. -> Ask which country.', options: [{ text: 'Which country have they visited?', isCorrect: true }, { text: 'Which country they have visited?', isCorrect: false }, { text: 'Have they visited which country?', isCorrect: false }], explanation: "Pregunta en presente perfecto. 'Which country' actúa como la palabra interrogativa.", translation: "¿Qué país han visitado?" },
            { id: 'fq19', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The concert was amazing. -> Ask how it was.', options: [{ text: 'How was the concert?', isCorrect: true }, { text: 'How the concert was?', isCorrect: false }, { text: 'Was the concert how?', isCorrect: false }], explanation: "Pregunta en pasado simple con el verbo 'to be'. Se invierte el sujeto y el verbo.", translation: "¿Cómo estuvo el concierto?" },
            { id: 'fq20', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He can speak three languages. -> Ask how many.', options: [{ text: 'How many languages can he speak?', isCorrect: true }, { text: 'How many languages he can speak?', isCorrect: false }, { text: 'Can he speak how many languages?', isCorrect: false }], explanation: "Con verbos modales como 'can', se invierte el sujeto y el modal.", translation: "¿Cuántos idiomas puede hablar?" },
            { id: 'fq21', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I am from Spain. -> Ask where from.', options: [{ text: 'Where are you from?', isCorrect: true }, { text: 'Where you are from?', isCorrect: false }, { text: 'Are you from where?', isCorrect: false }], explanation: "Pregunta común con el verbo 'to be'.", translation: "¿De dónde eres?" },
            { id: 'fq22', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She studied for three hours. -> Ask how long.', options: [{ text: 'How long did she study?', isCorrect: true }, { text: 'How long she studied?', isCorrect: false }, { text: 'Did she study how long?', isCorrect: false }], explanation: "Pregunta en pasado simple sobre duración. Se usa 'did'.", translation: "¿Cuánto tiempo estudió ella?" },
            { id: 'fq23', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They will arrive tomorrow. -> Ask when.', options: [{ text: 'When will they arrive?', isCorrect: true }, { text: 'When they will arrive?', isCorrect: false }, { text: 'Will they arrive when?', isCorrect: false }], explanation: "Con el futuro 'will', se invierte el sujeto y 'will'.", translation: "¿Cuándo llegarán?" },
            { id: 'fq24', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He has a dog. -> Ask if he has a dog.', options: [{ text: 'Does he have a dog?', isCorrect: true }, { text: 'Has he a dog?', isCorrect: false }, { text: 'Do he have a dog?', isCorrect: false }], explanation: "Para preguntar por posesión en presente, se usa 'Does... have'.", translation: "¿Tiene él un perro?" },
            { id: 'fq25', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She feels tired. -> Ask how she feels.', options: [{ text: 'How does she feel?', isCorrect: true }, { text: 'How she feels?', isCorrect: false }, { text: 'Does she feel how?', isCorrect: false }], explanation: "Pregunta en presente simple sobre estado. Se usa 'does'.", translation: "¿Cómo se siente ella?" },
            { id: 'fq26', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They were sleeping at 10 PM. -> Ask what they were doing.', options: [{ text: 'What were they doing at 10 PM?', isCorrect: true }, { text: 'What they were doing at 10 PM?', isCorrect: false }, { text: 'Were they doing what at 10 PM?', isCorrect: false }], explanation: "Pregunta en pasado continuo. QW + was/were + sujeto + verbo-ing.", translation: "¿Qué estaban haciendo a las 10 PM?" },
            { id: 'fq27', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: It costs $50. -> Ask how much.', options: [{ text: 'How much does it cost?', isCorrect: true }, { text: 'How much it costs?', isCorrect: false }, { text: 'Does it cost how much?', isCorrect: false }], explanation: "Pregunta de precio en presente simple. Se usa 'does'.", translation: "¿Cuánto cuesta?" },
            { id: 'fq28', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He has never seen a ghost. -> Ask if he has ever seen one.', options: [{ text: 'Has he ever seen a ghost?', isCorrect: true }, { text: 'He has ever seen a ghost?', isCorrect: false }, { text: 'Did he ever see a ghost?', isCorrect: false }], explanation: "'Ever' se usa en preguntas de presente perfecto sobre experiencias.", translation: "¿Ha visto alguna vez un fantasma?" },
            { id: 'fq29', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The children are playing in the park. -> Ask where.', options: [{ text: 'Where are the children playing?', isCorrect: true }, { text: 'Where the children are playing?', isCorrect: false }, { text: 'Are the children playing where?', isCorrect: false }], explanation: "Pregunta en presente continuo sobre lugar.", translation: "¿Dónde están jugando los niños?" },
            { id: 'fq30', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I woke up at 7 AM. -> Ask what time.', options: [{ text: 'What time did you wake up?', isCorrect: true }, { text: 'What time you woke up?', isCorrect: false }, { text: 'Did you wake up what time?', isCorrect: false }], explanation: "Pregunta en pasado simple sobre la hora. Se usa 'did'.", translation: "¿A qué hora te despertaste?" },
            { id: 'fq31', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She is a doctor. -> Ask her job.', options: [{ text: 'What does she do?', isCorrect: true }, { text: 'What is she do?', isCorrect: false }, { text: 'What is her job?', isCorrect: true }], explanation: "Ambas 'What does she do?' y 'What is her job?' son correctas para preguntar por la profesión.", translation: "¿A qué se dedica ella? / ¿Cuál es su trabajo?" },
            { id: 'fq32', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They did not come to the party. -> Ask why.', options: [{ text: "Why didn't they come to the party?", isCorrect: true }, { text: 'Why they did not come to the party?', isCorrect: false }, { text: "Didn't they come why?", isCorrect: false }], explanation: "Pregunta negativa en pasado simple.", translation: "¿Por qué no vinieron a la fiesta?" },
            { id: 'fq33', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The keys are on the table. -> Ask where.', options: [{ text: 'Where are the keys?', isCorrect: true }, { text: 'Where the keys are?', isCorrect: false }, { text: 'Are the keys where?', isCorrect: false }], explanation: "Pregunta de lugar con el verbo 'to be' en presente.", translation: "¿Dónde están las llaves?" },
            { id: 'fq34', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He was born in 1990. -> Ask when.', options: [{ text: 'When was he born?', isCorrect: true }, { text: 'When he was born?', isCorrect: false }, { text: 'Was he born when?', isCorrect: false }], explanation: "Pregunta sobre fecha de nacimiento con el verbo 'to be' en pasado.", translation: "¿Cuándo nació él?" },
            { id: 'fq35', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She will call you later. -> Ask if she will call.', options: [{ text: 'Will she call me later?', isCorrect: true }, { text: 'She will call me later?', isCorrect: false }, { text: 'Does she will call me later?', isCorrect: false }], explanation: "Pregunta de sí/no con el futuro 'will'.", translation: "¿Me llamará más tarde?" },
            { id: 'fq36', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: We are studying English. -> Ask what.', options: [{ text: 'What are you studying?', isCorrect: true }, { text: 'What you are studying?', isCorrect: false }, { text: 'Are you studying what?', isCorrect: false }], explanation: "Pregunta en presente continuo sobre la materia de estudio.", translation: "¿Qué estáis estudiando?" },
            { id: 'fq37', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The movie was not very good. -> Ask if it was good.', options: [{ text: 'Was the movie good?', isCorrect: true }, { text: 'Did the movie good?', isCorrect: false }, { text: 'The movie was good?', isCorrect: false }], explanation: "Pregunta de sí/no con el verbo 'to be' en pasado.", translation: "¿Estuvo buena la película?" },
            { id: 'fq38', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I have two brothers. -> Ask how many.', options: [{ text: 'How many brothers do you have?', isCorrect: true }, { text: 'How many brothers you have?', isCorrect: false }, { text: 'Do you have how many brothers?', isCorrect: false }], explanation: "Pregunta sobre cantidad y posesión. Se usa 'do... have'.", translation: "¿Cuántos hermanos tienes?" },
            { id: 'fq39', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They have been working since 9 AM. -> Ask how long.', options: [{ text: 'How long have they been working?', isCorrect: true }, { text: 'How long they have been working?', isCorrect: false }, { text: 'Have they been working how long?', isCorrect: false }], explanation: "Pregunta en presente perfecto continuo sobre duración.", translation: "¿Cuánto tiempo llevan trabajando?" },
            { id: 'fq40', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She visits her grandma every week. -> Ask how often.', options: [{ text: 'How often does she visit her grandma?', isCorrect: true }, { text: 'How often she visits her grandma?', isCorrect: false }, { text: 'Does she visit her grandma how often?', isCorrect: false }], explanation: "Pregunta sobre frecuencia en presente simple.", translation: "¿Con qué frecuencia visita a su abuela?" },
            { id: 'fq41', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He is taller than his brother. -> Ask if he is taller.', options: [{ text: 'Is he taller than his brother?', isCorrect: true }, { text: 'He is taller than his brother?', isCorrect: false }, { text: 'Does he is taller than his brother?', isCorrect: false }], explanation: "Pregunta de sí/no con adjetivo comparativo y verbo 'to be'.", translation: "¿Es él más alto que su hermano?" },
            { id: 'fq42', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: We finished the project. -> Ask if we finished it.', options: [{ text: 'Did we finish the project?', isCorrect: true }, { text: 'We did finish the project?', isCorrect: false }, { text: 'Finished we the project?', isCorrect: false }], explanation: "Pregunta de sí/no en pasado simple.", translation: "¿Terminamos el proyecto?" },
            { id: 'fq43', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The sun rises in the east. -> Ask where.', options: [{ text: 'Where does the sun rise?', isCorrect: true }, { text: 'Where the sun rises?', isCorrect: false }, { text: 'Does the sun rise where?', isCorrect: false }], explanation: "Pregunta sobre un hecho general en presente simple.", translation: "¿Por dónde sale el sol?" },
            { id: 'fq44', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I did not understand the lesson. -> Ask why.', options: [{ text: "Why didn't you understand the lesson?", isCorrect: true }, { text: 'Why you did not understand the lesson?', isCorrect: false }, { text: "Didn't you understand why?", isCorrect: false }], explanation: "Pregunta negativa en pasado simple.", translation: "¿Por qué no entendiste la lección?" },
            { id: 'fq45', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: They are going to travel to Japan. -> Ask where.', options: [{ text: 'Where are they going to travel?', isCorrect: true }, { text: 'Where they are going to travel?', isCorrect: false }, { text: 'Are they going to travel where?', isCorrect: false }], explanation: "Pregunta con 'be going to' para planes futuros.", translation: "¿A dónde van a viajar?" },
            { id: 'fq46', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: This book belongs to Sarah. -> Ask who.', options: [{ text: 'Who does this book belong to?', isCorrect: true }, { text: 'Who this book belongs to?', isCorrect: false }, { text: 'Does this book belong to who?', isCorrect: false }], explanation: "Pregunta sobre posesión con el verbo 'belong'.", translation: "¿A quién pertenece este libro?" },
            { id: 'fq47', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: She has lost her keys. -> Ask what.', options: [{ text: 'What has she lost?', isCorrect: true }, { text: 'What she has lost?', isCorrect: false }, { text: 'Has she lost what?', isCorrect: false }], explanation: "Pregunta en presente perfecto sobre el objeto.", translation: "¿Qué ha perdido ella?" },
            { id: 'fq48', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: The flight was delayed. -> Ask why.', options: [{ text: 'Why was the flight delayed?', isCorrect: true }, { text: 'Why the flight was delayed?', isCorrect: false }, { text: 'Was the flight delayed why?', isCorrect: false }], explanation: "Pregunta en voz pasiva en pasado simple.", translation: "¿Por qué se retrasó el vuelo?" },
            { id: 'fq49', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: I am learning to play the guitar. -> Ask what.', options: [{ text: 'What are you learning to play?', isCorrect: true }, { text: 'What you are learning to play?', isCorrect: false }, { text: 'Are you learning what to play?', isCorrect: false }], explanation: "Pregunta en presente continuo.", translation: "¿Qué estás aprendiendo a tocar?" },
            { id: 'fq50', type: QuestionType.MULTIPLE_CHOICE, form: 'Interrogative', sentence: 'Statement: He had a great time. -> Ask if he had a good time.', options: [{ text: 'Did he have a good time?', isCorrect: true }, { text: 'Had he a good time?', isCorrect: false }, { text: 'Did he had a good time?', isCorrect: false }], explanation: "Pregunta en pasado simple con el verbo 'have'. Se usa 'did' y 'have' en su forma base.", translation: "¿Lo pasó bien?" },
          ];
          return questions[i % questions.length];
        }).map((q, i) => ({ ...q, id: `fq${i + 6}` }))
    ],
  },
  {
    id: 'learning-answers',
    title: 'Aprende a Responder',
    description: 'Elige la respuesta corta y correcta para cada pregunta.',
    icon: ChatBubbleLeftEllipsisIcon,
    formula: {
      affirmative: 'Yes, Sujeto + Aux.',
      negative: 'No, Sujeto + Aux. + not.',
      interrogative: 'Use the same auxiliary as the question.',
    },
    questions: [
        {
            id: 'la1',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Affirmative',
            sentence: 'Question: Do you like coffee?',
            options: [
                { text: 'Yes, I do.', isCorrect: true },
                { text: 'Yes, I like.', isCorrect: false },
                { text: 'Yes, I am.', isCorrect: false },
            ],
            explanation: "La pregunta usa el auxiliar 'do', por lo que la respuesta corta debe usar 'do' o 'don't'.",
            translation: "Pregunta: ¿Te gusta el café? -> Sí."
        },
        {
            id: 'la2',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Negative',
            sentence: 'Question: Is she coming to the party?',
            options: [
                { text: "No, she isn't.", isCorrect: true },
                { text: "No, she doesn't.", isCorrect: false },
                { text: "No, she not.", isCorrect: false },
            ],
            explanation: "La pregunta usa 'is', por lo que la respuesta corta negativa debe usar 'isn't'.",
            translation: "Pregunta: ¿Viene ella a la fiesta? -> No."
        },
        {
            id: 'la3',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Affirmative',
            sentence: 'Question: Did they finish the project?',
            options: [
                { text: 'Yes, they did.', isCorrect: true },
                { text: 'Yes, they finished.', isCorrect: false },
                { text: 'Yes, they have.', isCorrect: false },
            ],
            explanation: "La pregunta usa el auxiliar 'did', por lo que la respuesta corta afirmativa debe usar 'did'.",
            translation: "Pregunta: ¿Terminaron el proyecto? -> Sí."
        },
        {
            id: 'la4',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Negative',
            sentence: 'Question: Have you seen this movie?',
            options: [
                { text: "No, I haven't.", isCorrect: true },
                { text: "No, I didn't.", isCorrect: false },
                { text: "No, I don't.", isCorrect: false },
            ],
            explanation: "La pregunta usa 'have', por lo que la respuesta corta negativa debe usar 'haven't'.",
            translation: "Pregunta: ¿Has visto esta película? -> No."
        },
        {
            id: 'la5',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Affirmative',
            sentence: 'Question: Can you swim?',
            options: [
                { text: 'Yes, I can.', isCorrect: true },
                { text: 'Yes, I do.', isCorrect: false },
                { text: 'Yes, I swim.', isCorrect: false },
            ],
            explanation: "Con verbos modales como 'can', la respuesta corta usa el mismo verbo modal.",
            translation: "Pregunta: ¿Sabes nadar? -> Sí."
        },
      // 45 more questions
      ...Array.from({ length: 45 }, (_, i) => {
        const questions = [
          // Simple Present
          // FIX: Add missing 'type' and 'form' properties to Question object.
          { id: 'la6', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Does he play tennis?', options: [{ text: "No, he doesn't.", isCorrect: true }, { text: "No, he don't.", isCorrect: false }, { text: "No, he isn't.", isCorrect: false }], explanation: "Pregunta con 'Does', respuesta con 'doesn't'.", translation: "¿Él juega al tenis? -> No." },
          { id: 'la7', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Are they students?', options: [{ text: 'Yes, they are.', isCorrect: true }, { text: 'Yes, they do.', isCorrect: false }, { text: 'Yes, they students.', isCorrect: false }], explanation: "Pregunta con 'Are', respuesta con 'are'.", translation: "¿Son estudiantes? -> Sí." },
          // Simple Past
          { id: 'la8', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Did she call you?', options: [{ text: 'Yes, she did.', isCorrect: true }, { text: 'Yes, she called.', isCorrect: false }, { text: 'Yes, she does.', isCorrect: false }], explanation: "Pregunta con 'Did', respuesta con 'did'.", translation: "¿Te llamó? -> Sí." },
          { id: 'la9', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Were you at home?', options: [{ text: "No, I wasn't.", isCorrect: true }, { text: "No, I didn't.", isCorrect: false }, { text: "No, I weren't.", isCorrect: false }], explanation: "Pregunta con 'Were', respuesta con 'wasn't' para 'I'.", translation: "¿Estabas en casa? -> No." },
          // Present Continuous
          { id: 'la10', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Are you listening?', options: [{ text: 'Yes, I am.', isCorrect: true }, { text: 'Yes, I do.', isCorrect: false }, { text: 'Yes, I listen.', isCorrect: false }], explanation: "Pregunta con 'Are you...?', respuesta con 'Yes, I am.'", translation: "¿Estás escuchando? -> Sí." },
          { id: 'la11', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Is it snowing?', options: [{ text: "No, it isn't.", isCorrect: true }, { text: "No, it doesn't.", isCorrect: false }, { text: "No, not snowing.", isCorrect: false }], explanation: "Pregunta con 'Is', respuesta con 'isn't'.", translation: "¿Está nevando? -> No." },
          // Present Perfect
          { id: 'la12', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Has he arrived?', options: [{ text: 'Yes, he has.', isCorrect: true }, { text: 'Yes, he did.', isCorrect: false }, { text: 'Yes, he arrived.', isCorrect: false }], explanation: "Pregunta con 'Has', respuesta con 'has'.", translation: "¿Ha llegado él? -> Sí." },
          { id: 'la13', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Have they eaten yet?', options: [{ text: "No, they haven't.", isCorrect: true }, { text: "No, they didn't.", isCorrect: false }, { text: "No, they don't.", isCorrect: false }], explanation: "Pregunta con 'Have', respuesta con 'haven't'.", translation: "¿Han comido ya? -> No." },
          // Modals
          { id: 'la14', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Will you be there?', options: [{ text: "Yes, I will.", isCorrect: true }, { text: "Yes, I'll be.", isCorrect: false }, { text: "Yes, I do.", isCorrect: false }], explanation: "Pregunta con 'Will', respuesta con 'will'.", translation: "¿Estarás allí? -> Sí." },
          { id: 'la15', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Should I wait?', options: [{ text: "No, you shouldn't.", isCorrect: true }, { text: "No, you don't.", isCorrect: false }, { text: "No, you not wait.", isCorrect: false }], explanation: "Pregunta con 'Should', respuesta con 'shouldn't'.", translation: "¿Debería esperar? -> No." },
          // Mixed
          { id: 'la16', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Do they speak English?', options: [{ text: 'Yes, they do.', isCorrect: true }, { text: 'Yes, they speak.', isCorrect: false }, { text: 'Yes, they are.', isCorrect: false }], explanation: "Pregunta con 'Do', respuesta con 'do'.", translation: "¿Hablan inglés? -> Sí." },
          { id: 'la17', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Was the movie interesting?', options: [{ text: "No, it wasn't.", isCorrect: true }, { text: "No, it didn't.", isCorrect: false }, { text: "No, it no was.", isCorrect: false }], explanation: "Pregunta con 'Was', respuesta con 'wasn't'.", translation: "¿Fue interesante la película? -> No." },
          { id: 'la18', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Are we late?', options: [{ text: 'Yes, we are.', isCorrect: true }, { text: 'Yes, we do.', isCorrect: false }, { text: 'Yes, late.', isCorrect: false }], explanation: "Pregunta con 'Are', respuesta con 'are'.", translation: "¿Llegamos tarde? -> Sí." },
          { id: 'la19', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Did you enjoy the meal?', options: [{ text: 'Yes, I did.', isCorrect: true }, { text: 'Yes, I enjoyed.', isCorrect: false }, { text: 'Yes, I was.', isCorrect: false }], explanation: "Pregunta con 'Did', respuesta con 'did'.", translation: "¿Disfrutaste la comida? -> Sí." },
          { id: 'la20', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Can she play the piano?', options: [{ text: "No, she can't.", isCorrect: true }, { text: "No, she doesn't.", isCorrect: false }, { text: "No, she can not play.", isCorrect: false }], explanation: "Pregunta con 'Can', respuesta con 'can't'.", translation: "¿Sabe tocar el piano? -> No." },
          { id: 'la21', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Is your brother a student?', options: [{ text: 'Yes, he is.', isCorrect: true }, { text: 'Yes, he does.', isCorrect: false }, { text: 'Yes, a student.', isCorrect: false }], explanation: "Pregunta con 'Is', respuesta con 'is'.", translation: "¿Tu hermano es estudiante? -> Sí." },
          { id: 'la22', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Have you finished your homework?', options: [{ text: "No, I haven't.", isCorrect: true }, { text: "No, I didn't.", isCorrect: false }, { text: "No, not finished.", isCorrect: false }], explanation: "Pregunta con 'Have', respuesta con 'haven't'.", translation: "¿Has terminado tu tarea? -> No." },
          { id: 'la23', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Does the bus stop here?', options: [{ text: 'Yes, it does.', isCorrect: true }, { text: 'Yes, it stops.', isCorrect: false }, { text: 'Yes, it is.', isCorrect: false }], explanation: "Pregunta con 'Does', respuesta con 'does'.", translation: "¿El autobús para aquí? -> Sí." },
          { id: 'la24', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Were the tickets expensive?', options: [{ text: "No, they weren't.", isCorrect: true }, { text: "No, they didn't.", isCorrect: false }, { text: "No, not expensive.", isCorrect: false }], explanation: "Pregunta con 'Were', respuesta con 'weren't'.", translation: "¿Eran caras las entradas? -> No." },
          { id: 'la25', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Are you feeling okay?', options: [{ text: 'Yes, I am.', isCorrect: true }, { text: 'Yes, I feel.', isCorrect: false }, { text: 'Yes, I do.', isCorrect: false }], explanation: "Pregunta con 'Are you...?', respuesta con 'Yes, I am.'", translation: "¿Te encuentras bien? -> Sí." },
          { id: 'la26', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Did it rain yesterday?', options: [{ text: "No, it didn't.", isCorrect: true }, { text: "No, it wasn't.", isCorrect: false }, { text: "No, it don't.", isCorrect: false }], explanation: "Pregunta con 'Did', respuesta con 'didn't'.", translation: "¿Llovió ayer? -> No." },
          { id: 'la27', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Will she come?', options: [{ text: "No, she won't.", isCorrect: true }, { text: "No, she will.", isCorrect: false }, { text: "No, she doesn't.", isCorrect: false }], explanation: "La negación de 'will' en respuestas cortas es 'won't'.", translation: "¿Vendrá ella? -> No." },
          { id: 'la28', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Is dinner ready?', options: [{ text: 'Yes, it is.', isCorrect: true }, { text: 'Yes, ready.', isCorrect: false }, { text: 'Yes, it does.', isCorrect: false }], explanation: "Pregunta con 'Is', respuesta con 'is'.", translation: "¿Está lista la cena? -> Sí." },
          { id: 'la29', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Do you need any help?', options: [{ text: "No, I don't.", isCorrect: true }, { text: "No, I need not.", isCorrect: false }, { text: "No, I am not.", isCorrect: false }], explanation: "Pregunta con 'Do', respuesta con 'don't'.", translation: "¿Necesitas ayuda? -> No." },
          { id: 'la30', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Has the movie started?', options: [{ text: "Yes, it has.", isCorrect: true }, { text: "Yes, it did.", isCorrect: false }, { text: "Yes, it started.", isCorrect: false }], explanation: "Pregunta con 'Has', respuesta con 'has'.", translation: "¿Ha empezado la película? -> Sí." },
          { id: 'la31', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Could you pass the salt?', options: [{ text: 'Yes, I can.', isCorrect: true }, { text: 'Yes, I could.', isCorrect: true }, { text: 'Yes, I do.', isCorrect: false }], explanation: "Para peticiones con 'Could', se puede responder con 'can' o 'could'.", translation: "¿Podrías pasar la sal? -> Sí." },
          { id: 'la32', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Is he a good singer?', options: [{ text: "No, he isn't.", isCorrect: true }, { text: "No, he doesn't.", isCorrect: false }, { text: "No, not a good singer.", isCorrect: false }], explanation: "Pregunta con 'Is', respuesta con 'isn't'.", translation: "¿Es él un buen cantante? -> No." },
          { id: 'la33', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Did they tell you?', options: [{ text: 'Yes, they did.', isCorrect: true }, { text: 'Yes, they told.', isCorrect: false }, { text: 'Yes, they have.', isCorrect: false }], explanation: "Pregunta con 'Did', respuesta con 'did'.", translation: "¿Te lo dijeron? -> Sí." },
          { id: 'la34', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Am I right?', options: [{ text: "Yes, you are.", isCorrect: true }, { text: "Yes, I am.", isCorrect: false }, { text: "Yes, you do.", isCorrect: false }], explanation: "La pregunta 'Am I...?' se responde con 'Yes, you are.' o 'No, you aren't.'", translation: "¿Tengo razón? -> Sí." },
          { id: 'la35', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Do we have enough time?', options: [{ text: "No, we don't.", isCorrect: true }, { text: "No, we haven't.", isCorrect: false }, { text: "No, we aren't.", isCorrect: false }], explanation: "Pregunta con 'Do', respuesta con 'don't'.", translation: "¿Tenemos tiempo suficiente? -> No." },
          { id: 'la36', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Were they surprised?', options: [{ text: 'Yes, they were.', isCorrect: true }, { text: 'Yes, they did.', isCorrect: false }, { text: 'Yes, surprised.', isCorrect: false }], explanation: "Pregunta con 'Were', respuesta con 'were'.", translation: "¿Estaban sorprendidos? -> Sí." },
          { id: 'la37', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Has she been informed?', options: [{ text: "No, she hasn't.", isCorrect: true }, { text: "No, she wasn't.", isCorrect: false }, { text: "No, she didn't.", isCorrect: false }], explanation: "Pregunta pasiva en presente perfecto. Respuesta con 'hasn't'.", translation: "¿Ha sido informada? -> No." },
          { id: 'la38', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Do I know you?', options: [{ text: "No, you don't.", isCorrect: true }, { text: "No, I don't.", isCorrect: false }, { text: "No, you aren't.", isCorrect: false }], explanation: "La pregunta 'Do I...?' se responde con 'Yes, you do.' o 'No, you don't.'", translation: "¿Te conozco? -> No." },
          { id: 'la39', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Is this seat taken?', options: [{ text: 'Yes, it is.', isCorrect: true }, { text: 'Yes, taken.', isCorrect: false }, { text: 'Yes, it does.', isCorrect: false }], explanation: "Pregunta pasiva con 'is'. Respuesta con 'is'.", translation: "¿Está ocupado este asiento? -> Sí." },
          { id: 'la40', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Did you sleep well?', options: [{ text: 'Yes, I did.', isCorrect: true }, { text: 'Yes, I slept.', isCorrect: false }, { text: 'Yes, I do.', isCorrect: false }], explanation: "Pregunta con 'Did', respuesta con 'did'.", translation: "¿Dormiste bien? -> Sí." },
          { id: 'la41', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Should we leave now?', options: [{ text: "No, we shouldn't.", isCorrect: true }, { text: "No, we don't.", isCorrect: false }, { text: "No, not leave.", isCorrect: false }], explanation: "Pregunta con 'Should', respuesta con 'shouldn't'.", translation: "¿Deberíamos irnos ya? -> No." },
          { id: 'la42', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Does it hurt?', options: [{ text: 'Yes, it does.', isCorrect: true }, { text: 'Yes, it hurts.', isCorrect: false }, { text: 'Yes, it is.', isCorrect: false }], explanation: "Pregunta con 'Does', respuesta con 'does'.", translation: "¿Duele? -> Sí." },
          { id: 'la43', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Were you listening to me?', options: [{ text: "No, I wasn't.", isCorrect: true }, { text: "No, I didn't.", isCorrect: false }, { text: "No, I'm not.", isCorrect: false }], explanation: "Pregunta en pasado continuo. Respuesta con 'wasn't'.", translation: "¿Me estabas escuchando? -> No." },
          { id: 'la44', type: QuestionType.MULTIPLE_CHOICE, form: 'Affirmative', sentence: 'Question: Have they ever tried it?', options: [{ text: "Yes, they have.", isCorrect: true }, { text: "Yes, they did.", isCorrect: false }, { text: "Yes, they tried.", isCorrect: false }], explanation: "Pregunta con 'Have', respuesta con 'have'.", translation: "¿Lo han probado alguna vez? -> Sí." },
          { id: 'la45', type: QuestionType.MULTIPLE_CHOICE, form: 'Negative', sentence: 'Question: Are your parents at home?', options: [{ text: "No, they aren't.", isCorrect: true }, { text: "No, they don't.", isCorrect: false }, { text: "No, not at home.", isCorrect: false }], explanation: "Pregunta con 'Are', respuesta con 'aren't'.", translation: "¿Están tus padres en casa? -> No." },
        ];
        return questions[i % questions.length];
      }).map((q, i) => ({ ...q, id: `la${i + 6}` }))
    ]
  },
];
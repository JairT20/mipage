import type { Level, Question } from './types';
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
        options: [{ text: 'go', isCorrect: false }, { text: 'goes', isCorrect: true }, { text: 'is going', isCorrect: false }, { text: 'going', isCorrect: false }],
        explanation: "En presente simple, para la tercera persona del singular (he, she, it), se añade -s o -es al verbo.",
        translation: "Ella va al gimnasio todos los días."
      },
      {
        id: 'sp2',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ like spicy food.',
        options: [{ text: "don't", isCorrect: true }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: false }, { text: "isn't", isCorrect: false }],
        explanation: "Para negar en presente simple con 'they', 'we', 'you', 'I', se utiliza 'do not' o 'don't'.",
        translation: "A ellos no les gusta la comida picante."
      },
      {
        id: 'sp3',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ he speak French?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Is', isCorrect: false }, { text: 'Does', isCorrect: true }, { text: 'Are', isCorrect: false }],
        explanation: "Para preguntar en presente simple con 'he', 'she', 'it', se utiliza el auxiliar 'Does' al principio.",
        translation: "¿Él habla francés?"
      },
      {
        id: 'sp4',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ in a small apartment.',
        options: [{ text: 'lives', isCorrect: false }, { text: 'live', isCorrect: true }, { text: 'are living', isCorrect: false }, { text: 'living', isCorrect: false }],
        explanation: "Para 'we', 'they', 'you', 'I', el verbo en presente simple se usa en su forma base (sin -s).",
        translation: "Vivimos en un apartamento pequeño."
      },
      {
        id: 'sp5',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ play the guitar.',
        options: [{ text: "don't", isCorrect: false }, { text: "isn't", isCorrect: false }, { text: "doesn't", isCorrect: true }, { text: "hasn't", isCorrect: false }],
        explanation: "Para negar en presente simple con 'he', 'she', 'it', se utiliza 'does not' o 'doesn't'.",
        translation: "Él no toca la guitarra."
      },
      {
        id: 'sp6',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ they work together?',
        options: [{ text: 'Do', isCorrect: true }, { text: 'Does', isCorrect: false }, { text: 'Are', isCorrect: false }, { text: 'Have', isCorrect: false }],
        explanation: "Para preguntar en presente simple con 'they', se usa el auxiliar 'Do' al principio.",
        translation: "¿Ellos trabajan juntos?"
      },
      {
        id: 'sp7',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The sun ___ in the east.',
        options: [{ text: 'rise', isCorrect: false }, { text: 'rises', isCorrect: true }, { text: 'is rising', isCorrect: false }, { text: 'risen', isCorrect: false }],
        explanation: "'The sun' es tercera persona del singular (it), por lo que se añade -s al verbo.",
        translation: "El sol sale por el este."
      },
      {
        id: 'sp8',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ understand the question.',
        options: [{ text: "doesn't", isCorrect: false }, { text: "am not", isCorrect: false }, { text: "don't", isCorrect: true }, { text: "can't", isCorrect: false }],
        explanation: "Para negar en presente simple con 'I', se utiliza 'do not' o 'don't'.",
        translation: "No entiendo la pregunta."
      },
      {
        id: 'sp9',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ she like coffee?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Does', isCorrect: true }, { text: 'Is', isCorrect: false }, { text: 'Has', isCorrect: false }],
        explanation: "Para preguntar en presente simple con 'she', se utiliza el auxiliar 'Does'.",
        translation: "¿A ella le gusta el café?"
      },
      {
        id: 'sp10',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'My parents ___ in Canada.',
        options: [{ text: 'live', isCorrect: true }, { text: 'lives', isCorrect: false }, { text: 'is living', isCorrect: false }, { text: 'are live', isCorrect: false }],
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
    ] as Question[],
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
        options: [{ text: 'read', isCorrect: false }, { text: 'reading', isCorrect: true }, { text: 'reads', isCorrect: false }, { text: 'to read', isCorrect: false }],
        explanation: "El presente continuo se forma con el verbo 'to be' (am, is, are) + el verbo principal en gerundio (-ing).",
        translation: "Estoy leyendo un libro ahora mismo."
      },
      {
        id: 'pc2',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'He ___ watching TV.',
        options: [{ text: "isn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: false }, { text: "not", isCorrect: false }],
        explanation: "Para negar en presente continuo, se añade 'not' después del verbo 'to be'. La contracción de 'is not' es 'isn't'.",
        translation: "Él no está viendo la televisión."
      },
      {
        id: 'pc3',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ they playing soccer?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Are', isCorrect: true }, { text: 'Does', isCorrect: false }, { text: 'Is', isCorrect: false }],
        explanation: "Para preguntar en presente continuo, se invierte el sujeto y el verbo 'to be'. 'Are' va al principio de la oración.",
        translation: "¿Están ellos jugando al fútbol?"
      },
      {
        id: 'pc4',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'You ___ making a lot of noise!',
        options: [{ text: 'is', isCorrect: false }, { text: 'are', isCorrect: true }, { text: 'do', isCorrect: false }, { text: 'am', isCorrect: false }],
        explanation: "Con el sujeto 'you', se usa 'are' para formar el presente continuo.",
        translation: "¡Estás haciendo mucho ruido!"
      },
      {
        id: 'pc5',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'We ___ going to the party tonight.',
        options: [{ text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: false }, { text: "aren't", isCorrect: true }, { text: "not", isCorrect: false }],
        explanation: "Para negar con 'we' en presente continuo, se usa 'are not' o 'aren't'.",
        translation: "Nosotros no vamos a la fiesta esta noche."
      },
      {
        id: 'pc6',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'What ___ you doing?',
        options: [{ text: 'is', isCorrect: false }, { text: 'do', isCorrect: false }, { text: 'are', isCorrect: true }, { text: 'does', isCorrect: false }],
        explanation: "En preguntas con 'you' en presente continuo, se usa 'are' antes del sujeto.",
        translation: "¿Qué estás haciendo?"
      },
      {
        id: 'pc7',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'She is ___ for her keys.',
        options: [{ text: 'look', isCorrect: false }, { text: 'looking', isCorrect: true }, { text: 'looks', isCorrect: false }, { text: 'to look', isCorrect: false }],
        explanation: "Después de 'is', el verbo principal va en gerundio (-ing) en el presente continuo.",
        translation: "Ella está buscando sus llaves."
      },
      {
        id: 'pc8',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'It ___ raining anymore.',
        options: [{ text: "doesn't", isCorrect: false }, { text: "isn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "not is", isCorrect: false }],
        explanation: "La negación para 'it' en presente continuo es 'is not' o 'isn't'.",
        translation: "Ya no está lloviendo."
      },
      {
        id: 'pc9',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ he sleeping?',
        options: [{ text: 'Does', isCorrect: false }, { text: 'Are', isCorrect: false }, { text: 'Is', isCorrect: true }, { text: 'Do', isCorrect: false }],
        explanation: "Para preguntar con 'he' en presente continuo, se pone 'Is' al principio.",
        translation: "¿Está él durmiendo?"
      },
      {
        id: 'pc10',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'The children ___ in the garden.',
        options: [{ text: 'play', isCorrect: false }, { text: 'are playing', isCorrect: true }, { text: 'plays', isCorrect: false }, { text: 'is playing', isCorrect: false }],
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
    ] as Question[],
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
        options: [{ text: 'go', isCorrect: false }, { text: 'gone', isCorrect: false }, { text: 'went', isCorrect: true }, { text: 'were going', isCorrect: false }],
        explanation: "'Went' es la forma en pasado simple del verbo irregular 'go'.",
        translation: "Nosotros fuimos al cine ayer."
      },
      {
        id: 'spa2',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'She ___ call me last night.',
        options: [{ text: "didn't", isCorrect: true }, { text: "wasn't", isCorrect: false }, { text: "don't", isCorrect: false }, { text: "doesn't", isCorrect: false }],
        explanation: "Para negar en pasado simple, se usa el auxiliar 'did not' (didn't) y el verbo principal en su forma base (call).",
        translation: "Ella no me llamó anoche."
      },
      {
        id: 'spa3',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ you finish your homework?',
        options: [{ text: 'Do', isCorrect: false }, { text: 'Did', isCorrect: true }, { text: 'Were', isCorrect: false }, { text: 'Have', isCorrect: false }],
        explanation: "Para preguntar en pasado simple, se usa el auxiliar 'Did' al principio y el verbo en su forma base.",
        translation: "¿Terminaste tu tarea?"
      },
      {
        id: 'spa4',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'I ___ a great movie last night.',
        options: [{ text: 'watch', isCorrect: false }, { text: 'watched', isCorrect: true }, { text: 'was watching', isCorrect: false }, { text: 'have watched', isCorrect: false }],
        explanation: "'Watch' es un verbo regular, por lo que su forma en pasado simple es 'watched' (añadiendo -ed).",
        translation: "Vi una película genial anoche."
      },
      {
        id: 'spa5',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'They ___ visit the museum.',
        options: [{ text: "weren't", isCorrect: false }, { text: "don't", isCorrect: false }, { text: "didn't", isCorrect: true }, { text: "haven't", isCorrect: false }],
        explanation: "La negación en pasado simple se forma con 'didn't' + el verbo en su forma base (visit).",
        translation: "Ellos no visitaron el museo."
      },
      {
        id: 'spa6',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: 'Where ___ you go on vacation?',
        options: [{ text: 'were', isCorrect: false }, { text: 'did', isCorrect: true }, { text: 'do', isCorrect: false }, { text: 'have', isCorrect: false }],
        explanation: "Para preguntar en pasado simple, se usa el auxiliar 'did' antes del sujeto.",
        translation: "¿A dónde fuiste de vacaciones?"
      },
      {
        id: 'spa7',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'He ___ me the truth.',
        options: [{ text: 'tell', isCorrect: false }, { text: 'telled', isCorrect: false }, { text: 'told', isCorrect: true }, { text: 'was telling', isCorrect: false }],
        explanation: "'Told' es la forma en pasado simple del verbo irregular 'tell'.",
        translation: "Él me dijo la verdad."
      },
      {
        id: 'spa8',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Negative',
        sentence: 'I ___ know the answer.',
        options: [{ text: "wasn't", isCorrect: false }, { text: "didn't", isCorrect: true }, { text: "don't", isCorrect: false }, { text: "haven't", isCorrect: false }],
        explanation: "Se usa 'didn't' + el verbo en forma base (know) para negar en pasado simple.",
        translation: "Yo no sabía la respuesta."
      },
      {
        id: 'spa9',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Interrogative',
        sentence: '___ she buy a new car?',
        options: [{ text: 'Does', isCorrect: false }, { text: 'Was', isCorrect: false }, { text: 'Did', isCorrect: true }, { text: 'Has', isCorrect: false }],
        explanation: "Las preguntas en pasado simple empiezan con 'Did', y el verbo principal va en su forma base (buy).",
        translation: "¿Compró ella un coche nuevo?"
      },
      {
        id: 'spa10',
        type: QuestionType.FILL_IN_THE_BLANK,
        form: 'Affirmative',
        sentence: 'We ___ to music for hours.',
        options: [{ text: 'listened', isCorrect: true }, { text: 'listen', isCorrect: false }, { text: 'were listening', isCorrect: false }, { text: 'did listen', isCorrect: false }],
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
    ] as Question[],
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
            options: [{ text: 'be', isCorrect: false }, { text: 'been', isCorrect: true }, { text: 'was', isCorrect: false }, { text: 'went', isCorrect: false }],
            explanation: "El presente perfecto se forma con 'have/has' + el participio pasado del verbo. 'Been' es el participio de 'be'.",
            translation: "He estado en Londres dos veces."
        },
        {
            id: 'pp2',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Negative',
            sentence: 'She has not ___ feeling well recently.',
            options: [{ text: 'be', isCorrect: false }, { text: 'was', isCorrect: false }, { text: 'been', isCorrect: true }, { text: 'being', isCorrect: false }],
            explanation: "Para negar, se añade 'not' después de 'have/has'. Se sigue usando el participio pasado 'been'.",
            translation: "Ella no se ha sentido bien recientemente."
        },
        {
            id: 'pp3',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Interrogative',
            sentence: '___ you ever been to Japan?',
            options: [{ text: 'Have', isCorrect: true }, { text: 'Did', isCorrect: false }, { text: 'Are', isCorrect: false }, { text: 'Do', isCorrect: false }],
            explanation: "Para preguntar, se coloca 'Have/Has' al principio de la oración, antes del sujeto.",
            translation: "¿Alguna vez has estado en Japón?"
        },
        {
          id: 'pp4',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'They have ___ their homework.',
          options: [{ text: 'finish', isCorrect: false }, { text: 'finishing', isCorrect: false }, { text: 'finished', isCorrect: true }, { text: 'did finish', isCorrect: false }],
          explanation: "El presente perfecto usa 'have' + el participio pasado del verbo. El participio de 'finish' es 'finished'.",
          translation: "Ellos han terminado su tarea."
        },
        {
          id: 'pp5',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Negative',
          sentence: 'He ___ eaten breakfast yet.',
          options: [{ text: "didn't", isCorrect: false }, { text: "hasn't", isCorrect: true }, { text: "isn't", isCorrect: false }, { text: "don't", isCorrect: false }],
          explanation: "La negación para 'he' en presente perfecto es 'has not' o 'hasn't'.",
          translation: "Él no ha desayunado todavía."
        },
        {
          id: 'pp6',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Interrogative',
          sentence: '___ she ever traveled abroad?',
          options: [{ text: 'Did', isCorrect: false }, { text: 'Is', isCorrect: false }, { text: 'Has', isCorrect: true }, { text: 'Does', isCorrect: false }],
          explanation: "Las preguntas con 'she' en presente perfecto comienzan con 'Has'.",
          translation: "¿Ha viajado ella al extranjero alguna vez?"
        },
        {
          id: 'pp7',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'I have ___ this book before.',
          options: [{ text: 'readed', isCorrect: false }, { text: 'reading', isCorrect: false }, { text: 'read', isCorrect: true }, { text: 'red', isCorrect: false }],
          explanation: "El participio pasado del verbo irregular 'read' se escribe igual, 'read', pero se pronuncia diferente.",
          translation: "He leído este libro antes."
        },
        {
          id: 'pp8',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Negative',
          sentence: 'We ___ seen that movie.',
          options: [{ text: "didn't", isCorrect: false }, { text: "haven't", isCorrect: true }, { text: "aren't", isCorrect: false }, { text: "weren't", isCorrect: false }],
          explanation: "La negación para 'we' en presente perfecto es 'have not' o 'haven't'.",
          translation: "No hemos visto esa película."
        },
        {
          id: 'pp9',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Interrogative',
          sentence: 'How long ___ you lived here?',
          options: [{ text: 'did', isCorrect: false }, { text: 'are', isCorrect: false }, { text: 'have', isCorrect: true }, { text: 'do', isCorrect: false }],
          explanation: "Para preguntar por duración hasta el presente, se usa 'have' en la estructura del presente perfecto.",
          translation: "¿Cuánto tiempo has vivido aquí?"
        },
        {
          id: 'pp10',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'It has ___ a lot this week.',
          options: [{ text: 'rained', isCorrect: true }, { text: 'rain', isCorrect: false }, { text: 'raining', isCorrect: false }, { text: 'did rain', isCorrect: false }],
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
    ] as Question[],
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
            options: [{ text: 'faster', isCorrect: true }, { text: 'fastest', isCorrect: false }, { text: 'fast', isCorrect: false }, { text: 'more fast', isCorrect: false }],
            explanation: "Para comparar dos cosas, se usa el adjetivo comparativo (con -er para adjetivos cortos). 'more fast' es un error común.",
            translation: "Este coche es más rápido que ese."
        },
        {
            id: 'cs2',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'She is the ___ person in our class.',
            options: [{ text: 'more intelligent', isCorrect: false }, { text: 'intelligent', isCorrect: false }, { text: 'most intelligent', isCorrect: true }, { text: 'intelligenter', isCorrect: false }],
            explanation: "Para superlativos con adjetivos largos, se usa 'the most' antes del adjetivo.",
            translation: "Ella es la persona más inteligente de nuestra clase."
        },
        {
            id: 'cs3',
            type: QuestionType.FILL_IN_THE_BLANK,
            form: 'Affirmative',
            sentence: 'Mount Everest is the ___ mountain in the world.',
            options: [{ text: 'high', isCorrect: false }, { text: 'higher', isCorrect: false }, { text: 'highest', isCorrect: true }, { text: 'most high', isCorrect: false }],
            explanation: "Para destacar una cualidad sobre todas las demás, se usa el superlativo (con -est para adjetivos cortos).",
            translation: "El Monte Everest es la montaña más alta del mundo."
        },
        {
          id: 'cs4',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'My sister is ___ than me.',
          options: [{ text: 'tallest', isCorrect: false }, { text: 'taller', isCorrect: true }, { text: 'tall', isCorrect: false }, { text: 'more tall', isCorrect: false }],
          explanation: "Para comparar dos personas con un adjetivo corto como 'tall', se añade '-er' para formar el comparativo.",
          translation: "Mi hermana es más alta que yo."
        },
        {
          id: 'cs5',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This is the ___ movie I have ever seen.',
          options: [{ text: 'worse', isCorrect: false }, { text: 'badder', isCorrect: false }, { text: 'worst', isCorrect: true }, { text: 'most bad', isCorrect: false }],
          explanation: "'Worst' es el superlativo irregular del adjetivo 'bad'. Se usa para indicar el grado máximo.",
          translation: "Esta es la peor película que he visto."
        },
        {
          id: 'cs6',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'This exercise is ___ than the last one.',
          options: [{ text: 'most difficult', isCorrect: false }, { text: 'more difficult', isCorrect: true }, { text: 'difficult', isCorrect: false }, { text: 'difficulter', isCorrect: false }],
          explanation: "Para adjetivos largos como 'difficult', se usa 'more' para formar el comparativo.",
          translation: "Este ejercicio es más difícil que el anterior."
        },
        {
          id: 'cs7',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'He is the ___ student in the school.',
          options: [{ text: 'goodest', isCorrect: false }, { text: 'better', isCorrect: false }, { text: 'best', isCorrect: true }, { text: 'most good', isCorrect: false }],
          explanation: "'Best' es el superlativo irregular de 'good'. Se usa para destacar a alguien sobre el resto.",
          translation: "Él es el mejor estudiante de la escuela."
        },
        {
          id: 'cs8',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'A lion is ___ than a cat.',
          options: [{ text: 'big', isCorrect: false }, { text: 'biggest', isCorrect: false }, { text: 'bigger', isCorrect: true }, { text: 'more big', isCorrect: false }],
          explanation: "Para adjetivos cortos de una sílaba terminados en consonante-vocal-consonante, se duplica la última consonante y se añade '-er'.",
          translation: "Un león es más grande que un gato."
        },
        {
          id: 'cs9',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'It was the ___ day of my life.',
          options: [{ text: 'happier', isCorrect: false }, { text: 'happy', isCorrect: false }, { text: 'happiest', isCorrect: true }, { text: 'most happy', isCorrect: false }],
          explanation: "Para adjetivos de dos sílabas terminados en '-y', se cambia la 'y' por 'i' y se añade '-est' para el superlativo.",
          translation: "Fue el día más feliz de mi vida."
        },
        {
          id: 'cs10',
          type: QuestionType.FILL_IN_THE_BLANK,
          form: 'Affirmative',
          sentence: 'Your explanation is ___ than mine.',
          options: [{ text: 'clear', isCorrect: false }, { text: 'clearer', isCorrect: true }, { text: 'clearest', isCorrect: false }, { text: 'more clear', isCorrect: false }],
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
    ] as Question[],
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
        { id: 'fq1', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She works in a big office.", sentenceParts: ["Where", "she", "?"], answerBlocks: ["work", "do", "does", "is", "works"], correctOrder: ["does", "work"], hints: ["Auxiliar", "Verbo"], explanation: "Para preguntar sobre el lugar de trabajo de 'ella' (she) en presente simple, usamos: Where + does + she + work?", translation: "Contexto: 'Ella trabaja en una oficina grande.' Pregunta: '¿Dónde trabaja ella?'" },
        { id: 'fq2', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They like pizza.", sentenceParts: ["", "they like pizza?"], answerBlocks: ["Does", "Do", "Are", "Is"], correctOrder: ["Do"], hints: ["Auxiliar"], explanation: "Para confirmar información en presente simple con 'they', la pregunta empieza con 'Do'.", translation: "Contexto: 'A ellos les gusta la pizza.' Pregunta: '¿A ellos les gusta la pizza?'" },
        { id: 'fq3', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "The train leaves at 8 PM.", sentenceParts: ["What time", "the train", "?"], answerBlocks: ["leave", "is", "does", "leaves", "do"], correctOrder: ["does", "leave"], hints: ["Auxiliar", "Verbo"], explanation: "Para preguntar la hora de un evento con 'the train' (it), se usa 'does'.", translation: "Contexto: 'El tren sale a las 8 PM.' Pregunta: '¿A qué hora sale el tren?'" },
        { id: 'fq4', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He is singing a song.", sentenceParts: ["What", "he", "?"], answerBlocks: ["is", "doing", "are", "does", "sings"], correctOrder: ["is", "doing"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Para preguntar sobre la acción de alguien en presente continuo, usamos 'What + is + he + doing?'", translation: "Contexto: 'Él está cantando una canción.' Pregunta: '¿Qué está haciendo él?'" },
        { id: 'fq5', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They are going to the park.", sentenceParts: ["Where", "they", "?"], answerBlocks: ["go", "are", "is", "going", "do"], correctOrder: ["are", "going"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Para preguntar el destino en presente continuo, se usa: Where + are + they + going?", translation: "Contexto: 'Ellos van al parque.' Pregunta: '¿A dónde van?'" },
        { id: 'fq6', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She went to the cinema yesterday.", sentenceParts: ["", "she go to the cinema?"], answerBlocks: ["Did", "Was", "Does", "Is"], correctOrder: ["Did"], hints: ["Auxiliar"], explanation: "Para preguntar si una acción ocurrió en el pasado, se usa 'Did' y el verbo en forma base ('go').", translation: "Contexto: 'Ella fue al cine ayer.' Pregunta: '¿Fue ella al cine?'" },
        { id: 'fq7', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He bought a new car.", sentenceParts: ["What", "he", "?"], answerBlocks: ["was", "did", "buy", "bought", "does"], correctOrder: ["did", "buy"], hints: ["Auxiliar", "Verbo"], explanation: "Para preguntar sobre un objeto en pasado simple: What + did + he + buy?", translation: "Contexto: 'Él compró un coche nuevo.' Pregunta: '¿Qué compró él?'" },
        { id: 'fq8', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I have been to Paris.", sentenceParts: ["Where", "you", "?"], answerBlocks: ["been", "have", "went", "has", "did"], correctOrder: ["have", "been"], hints: ["Auxiliar", "Participio"], explanation: "Para preguntar sobre lugares visitados en presente perfecto: Where + have + you + been?", translation: "Contexto: 'He estado en París.' Pregunta: '¿Dónde has estado?'" },
        { id: 'fq9', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She has finished her work.", sentenceParts: ["", "she", "her work?"], answerBlocks: ["finished", "Did", "Has", "finish", "Have"], correctOrder: ["Has", "finished"], hints: ["Auxiliar", "Participio"], explanation: "Para confirmar una acción en presente perfecto con 'she', la pregunta empieza con 'Has'.", translation: "Contexto: 'Ella ha terminado su trabajo.' Pregunta: '¿Ha terminado ella su trabajo?'" },
        { id: 'fq10', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They ate pizza for dinner.", sentenceParts: ["When", "they", "pizza?"], answerBlocks: ["did", "were", "ate", "eat", "do"], correctOrder: ["did", "eat"], hints: ["Auxiliar", "Verbo"], explanation: "Para preguntar cuándo ocurrió una acción en el pasado, se usa 'When + did...'.", translation: "Contexto: 'Cenaron pizza.' Pregunta: '¿Cuándo comieron pizza?'" },
        { id: 'fq11', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I'm learning English.", sentenceParts: ["What", "you", "?"], answerBlocks: ["are", "is", "learning", "learn", "do"], correctOrder: ["are", "learning"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Para preguntar sobre una actividad en curso.", translation: "Contexto: 'Estoy aprendiendo inglés.' Pregunta: '¿Qué estás aprendiendo?'" },
        { id: 'fq12', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He doesn't like spinach.", sentenceParts: ["What", "he not", "?"], answerBlocks: ["likes", "like", "does", "do", "is"], correctOrder: ["does", "like"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando sobre lo que no le gusta a alguien.", translation: "Contexto: 'A él no le gustan las espinacas.' Pregunta: '¿Qué no le gusta a él?'" },
        { id: 'fq13', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They have lived here for ten years.", sentenceParts: ["How long", "they", "here?"], answerBlocks: ["have", "did", "live", "has", "lived"], correctOrder: ["have", "lived"], hints: ["Auxiliar", "Participio"], explanation: "Usamos 'How long' con Presente Perfecto para duraciones hasta ahora.", translation: "Contexto: 'Han vivido aquí diez años.' Pregunta: '¿Cuánto tiempo han vivido aquí?'" },
        { id: 'fq14', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "The meeting started at 9 AM.", sentenceParts: ["", "the meeting", "at 9 AM?"], answerBlocks: ["start", "Did", "started", "Was", "Does"], correctOrder: ["Did", "start"], hints: ["Auxiliar", "Verbo"], explanation: "Confirmando la hora de un evento pasado.", translation: "Contexto: 'La reunión empezó a las 9 AM.' Pregunta: '¿Empezó la reunión a las 9 AM?'" },
        { id: 'fq15', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She's crying because she is sad.", sentenceParts: ["Why", "she", "?"], answerBlocks: ["is", "does", "cries", "crying", "are"], correctOrder: ["is", "crying"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando la razón de una acción en curso.", translation: "Contexto: 'Está llorando porque está triste.' Pregunta: '¿Por qué está llorando?'" },
        { id: 'fq16', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I have already seen that film.", sentenceParts: ["", "you", "that film?"], answerBlocks: ["saw", "Have", "seen", "Did", "Has"], correctOrder: ["Have", "seen"], hints: ["Auxiliar", "Participio"], explanation: "Pregunta sobre una experiencia pasada.", translation: "Contexto: 'Ya he visto esa película.' Pregunta: '¿Has visto esa película?'" },
        { id: 'fq17', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He visits his grandma every Sunday.", sentenceParts: ["How often", "he", "his grandma?"], answerBlocks: ["visits", "visit", "does", "do", "is"], correctOrder: ["does", "visit"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando sobre la frecuencia de una rutina.", translation: "Contexto: 'Visita a su abuela todos los domingos.' Pregunta: '¿Con qué frecuencia visita a su abuela?'" },
        { id: 'fq18', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They weren't at the party.", sentenceParts: ["Why", "they at the party?"], answerBlocks: ["didn't", "wasn't", "weren't"], correctOrder: ["weren't"], hints: ["Aux. Negativo"], explanation: "Preguntando la razón de una ausencia en el pasado.", translation: "Contexto: 'No estaban en la fiesta.' Pregunta: '¿Por qué no estaban en la fiesta?'" },
        { id: 'fq19', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She has broken her arm.", sentenceParts: ["What", "she", "?"], answerBlocks: ["has", "have", "broken", "done", "did"], correctOrder: ["has", "done"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando sobre un evento reciente con consecuencias.", translation: "Contexto: 'Se ha roto el brazo.' Pregunta: '¿Qué ha hecho?'" },
        { id: 'fq20', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He is a doctor.", sentenceParts: ["What", "he", "?"], answerBlocks: ["is doing", "does", "do", "is", "he"], correctOrder: ["does", "do"], hints: ["Auxiliar", "Verbo"], explanation: "Para preguntar por la profesión de alguien, se usa 'What do you do?' o 'What does he do?'.", translation: "Contexto: 'Él es médico.' Pregunta: '¿A qué se dedica?'" },
        { id: 'fq21', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They play soccer on Saturdays.", sentenceParts: ["", "they play soccer on Saturdays?"], answerBlocks: ["Do", "Are", "Does"], correctOrder: ["Do"], hints: ["Auxiliar"], explanation: "Confirmando una rutina.", translation: "Contexto: 'Juegan al fútbol los sábados.' Pregunta: '¿Juegan al fútbol los sábados?'" },
        { id: 'fq22', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I am working on a new project.", sentenceParts: ["What", "you", "on?"], answerBlocks: ["work", "working", "am", "are", "do"], correctOrder: ["are", "working"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando sobre una actividad laboral actual.", translation: "Contexto: 'Estoy trabajando en un nuevo proyecto.' Pregunta: '¿En qué estás trabajando?'" },
        { id: 'fq23', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She lost her keys.", sentenceParts: ["", "she", "her keys?"], answerBlocks: ["find", "Did", "found", "Has", "Does"], correctOrder: ["Did", "find"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando por la resolución de un problema pasado.", translation: "Contexto: 'Ella perdió sus llaves.' Pregunta: '¿Encontró ella sus llaves?'" },
        { id: 'fq24', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "We have never tried Thai food.", sentenceParts: ["", "you ever", "Thai food?"], answerBlocks: ["try", "tried", "Have", "Did", "Do"], correctOrder: ["Have", "tried"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando sobre experiencias de vida.", translation: "Contexto: 'Nunca hemos probado la comida tailandesa.' Pregunta: '¿Habéis probado alguna vez la comida tailandesa?'" },
        { id: 'fq25', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "It rains a lot in spring.", sentenceParts: ["", "it", "a lot in spring?"], answerBlocks: ["rain", "Does", "rains", "Is", "Do"], correctOrder: ["Does", "rain"], hints: ["Auxiliar", "Verbo"], explanation: "Confirmando un hecho climático.", translation: "Contexto: 'Llueve mucho en primavera.' Pregunta: '¿Llueve mucho en primavera?'" },
        { id: 'fq26', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He is waiting for the bus.", sentenceParts: ["What", "he", "for?"], answerBlocks: ["is", "waits", "waiting", "does", "are"], correctOrder: ["is", "waiting"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando por el objeto de una espera.", translation: "Contexto: 'Está esperando el autobús.' Pregunta: '¿Qué está esperando?'" },
        { id: 'fq27', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They finished the race.", sentenceParts: ["", "they", "the race?"], answerBlocks: ["finish", "Did", "finished", "Have", "Do"], correctOrder: ["Did", "finish"], hints: ["Auxiliar", "Verbo"], explanation: "Confirmando un evento pasado.", translation: "Contexto: 'Terminaron la carrera.' Pregunta: '¿Terminaron la carrera?'" },
        { id: 'fq28', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I have known him for a long time.", sentenceParts: ["How long", "you", "him?"], answerBlocks: ["have", "knew", "known", "did", "do"], correctOrder: ["have", "known"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando por la duración de un conocimiento.", translation: "Contexto: 'Lo conozco desde hace mucho tiempo.' Pregunta: '¿Desde cuándo lo conoces?'" },
        { id: 'fq29', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "The sun rises in the east.", sentenceParts: ["Where", "the sun", "?"], answerBlocks: ["rise", "does", "rises", "is", "do"], correctOrder: ["does", "rise"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando por la ubicación de un hecho natural.", translation: "Contexto: 'El sol sale por el este.' Pregunta: '¿Por dónde sale el sol?'" },
        { id: 'fq30', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He isn't sleeping.", sentenceParts: ["Why", "he", "?"], answerBlocks: ["sleep", "isn't", "is", "sleeping", "doesn't"], correctOrder: ["isn't", "sleeping"], hints: ["Aux. Negativo", "Verbo -ing"], explanation: "Preguntando la razón de por qué algo no está sucediendo.", translation: "Contexto: 'Él no está durmiendo.' Pregunta: '¿Por qué no está durmiendo?'" },
        { id: 'fq31', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She wrote a letter.", sentenceParts: ["Who", "a letter?"], answerBlocks: ["written", "did write", "wrote"], correctOrder: ["wrote"], hints: ["Verbo Pasado"], explanation: "Cuando 'Who' es el sujeto, no se usa auxiliar 'did'.", translation: "Contexto: 'Ella escribió una carta.' Pregunta: '¿Quién escribió una carta?'" },
        { id: 'fq32', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They haven't arrived yet.", sentenceParts: ["", "they", "yet?"], answerBlocks: ["arrived", "Have", "arrive", "Did", "Are"], correctOrder: ["Have", "arrived"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando si una acción esperada ya ha ocurrido.", translation: "Contexto: 'No han llegado todavía.' Pregunta: '¿Han llegado ya?'" },
        { id: 'fq33', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He speaks three languages.", sentenceParts: ["How many languages", "he", "?"], answerBlocks: ["speak", "does", "speaks", "is", "do"], correctOrder: ["does", "speak"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando por la cantidad de algo.", translation: "Contexto: 'Habla tres idiomas.' Pregunta: '¿Cuántos idiomas habla?'" },
        { id: 'fq34', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They are building a house.", sentenceParts: ["What", "they", "?"], answerBlocks: ["are", "build", "building", "do", "is"], correctOrder: ["are", "building"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando sobre el objeto que se está construyendo.", translation: "Contexto: 'Están construyendo una casa.' Pregunta: '¿Qué están construyendo?'" },
        { id: 'fq35', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I didn't watch the game.", sentenceParts: ["Why", "you", "the game?"], answerBlocks: ["watch", "didn't", "watched", "don't", "weren't"], correctOrder: ["didn't", "watch"], hints: ["Aux. Negativo", "Verbo"], explanation: "Preguntando la razón por la que no se hizo algo.", translation: "Contexto: 'No vi el partido.' Pregunta: '¿Por qué no viste el partido?'" },
        { id: 'fq36', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She has been working all day.", sentenceParts: ["What", "she", "all day?"], answerBlocks: ["been doing", "has", "worked", "is", "did"], correctOrder: ["has", "been doing"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando sobre la actividad durante un período de tiempo (Presente Perfecto Continuo).", translation: "Contexto: 'Ha estado trabajando todo el día.' Pregunta: '¿Qué ha estado haciendo todo el día?'" },
        { id: 'fq37', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He lives in New York.", sentenceParts: ["", "he", "in New York?"], answerBlocks: ["live", "Does", "lives", "Is", "Do"], correctOrder: ["Does", "live"], hints: ["Auxiliar", "Verbo"], explanation: "Confirmando el lugar de residencia.", translation: "Contexto: 'Vive en Nueva York.' Pregunta: '¿Vive en Nueva York?'" },
        { id: 'fq38', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "The children are playing outside.", sentenceParts: ["Where", "the children", "?"], answerBlocks: ["are", "play", "playing", "is", "do"], correctOrder: ["are", "playing"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando por la ubicación de una actividad en curso.", translation: "Contexto: 'Los niños están jugando fuera.' Pregunta: '¿Dónde están jugando los niños?'" },
        { id: 'fq39', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She sold her car.", sentenceParts: ["", "she", "her car?"], answerBlocks: ["sell", "Did", "sold", "Does", "Has"], correctOrder: ["Did", "sell"], hints: ["Auxiliar", "Verbo"], explanation: "Confirmando una venta en el pasado.", translation: "Contexto: 'Vendió su coche.' Pregunta: '¿Vendió su coche?'" },
        { id: 'fq40', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I haven't talked to him.", sentenceParts: ["", "you", "to him?"], answerBlocks: ["talked", "Have", "talk", "Did", "Do"], correctOrder: ["Have", "talked"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando si una acción ha ocurrido.", translation: "Contexto: 'No he hablado con él.' Pregunta: '¿Has hablado con él?'" },
        { id: 'fq41', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "This bag belongs to Jane.", sentenceParts: ["Who", "this bag", "to?"], answerBlocks: ["belong", "does", "belongs", "is", "do"], correctOrder: ["does", "belong"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando por la posesión de un objeto.", translation: "Contexto: 'Esta bolsa pertenece a Jane.' Pregunta: '¿A quién pertenece esta bolsa?'" },
        { id: 'fq42', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "It is snowing.", sentenceParts: ["", "it", "?"], answerBlocks: ["snow", "Is", "snowing", "Does", "Are"], correctOrder: ["Is", "snowing"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Confirmando el tiempo actual.", translation: "Contexto: 'Está nevando.' Pregunta: '¿Está nevando?'" },
        { id: 'fq43', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They saw a lion at the zoo.", sentenceParts: ["What", "they", "at the zoo?"], answerBlocks: ["see", "did", "saw", "were", "do"], correctOrder: ["did", "see"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando qué se vio en un lugar.", translation: "Contexto: 'Vieron un león en el zoo.' Pregunta: '¿Qué vieron en el zoo?'" },
        { id: 'fq44', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He has gone home.", sentenceParts: ["Where", "he", "?"], answerBlocks: ["gone", "has", "went", "did", "is"], correctOrder: ["has", "gone"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando por el paradero de alguien.", translation: "Contexto: 'Se ha ido a casa.' Pregunta: '¿Adónde ha ido?'" },
        { id: 'fq45', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "I get up at 7 AM.", sentenceParts: ["What time", "you", "?"], answerBlocks: ["get up", "do", "gets up", "are", "does"], correctOrder: ["do", "get up"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando por la hora de una rutina.", translation: "Contexto: 'Me levanto a las 7 AM.' Pregunta: '¿A qué hora te levantas?'" },
        { id: 'fq46', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She is wearing a red dress.", sentenceParts: ["What color dress", "she", "?"], answerBlocks: ["is", "wears", "wearing", "does", "are"], correctOrder: ["is", "wearing"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando por un detalle específico.", translation: "Contexto: 'Lleva un vestido rojo.' Pregunta: '¿De qué color es el vestido que lleva?'" },
        { id: 'fq47', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He fixed the computer.", sentenceParts: ["", "he", "the computer?"], answerBlocks: ["fix", "Did", "fixed", "Does", "Was"], correctOrder: ["Did", "fix"], hints: ["Auxiliar", "Verbo"], explanation: "Confirmando una acción pasada.", translation: "Contexto: 'Arregló el ordenador.' Pregunta: '¿Arregló el ordenador?'" },
        { id: 'fq48', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "They have bought a new television.", sentenceParts: ["What", "they", "?"], answerBlocks: ["have", "buy", "bought", "did", "do"], correctOrder: ["have", "bought"], hints: ["Auxiliar", "Participio"], explanation: "Preguntando qué se ha comprado.", translation: "Contexto: 'Han comprado una televisión nueva.' Pregunta: '¿Qué han comprado?'" },
        { id: 'fq49', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "She runs every morning.", sentenceParts: ["When", "she", "?"], answerBlocks: ["run", "does", "runs", "is", "do"], correctOrder: ["does", "run"], hints: ["Auxiliar", "Verbo"], explanation: "Preguntando cuándo se realiza una rutina.", translation: "Contexto: 'Corre cada mañana.' Pregunta: '¿Cuándo corre?'" },
        { id: 'fq50', type: QuestionType.SENTENCE_BUILDER, form: 'Interrogative', contextSentence: "He is talking on the phone.", sentenceParts: ["Who", "he", "to?"], answerBlocks: ["is", "talks", "talking", "does", "are"], correctOrder: ["is", "talking"], hints: ["Verbo to be", "Verbo -ing"], explanation: "Preguntando con quién se está hablando.", translation: "Contexto: 'Está hablando por teléfono.' Pregunta: '¿Con quién está hablando?'" }
    ] as Question[],
  },
  {
    id: 'learning-answers',
    title: 'Preguntas y Respuestas con Contexto',
    description: 'Elige la respuesta más lógica y gramaticalmente correcta.',
    icon: ChatBubbleLeftEllipsisIcon,
    formula: {
        affirmative: 'Yes, Sujeto + Aux.',
        negative: 'No, Sujeto + Aux. + not.',
        interrogative: 'Usa el mismo auxiliar de la pregunta',
    },
    questions: [
        {
            id: 'la1',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Do you like coffee?',
            options: [
                { text: "Yes, I do. I drink a cup every morning.", isCorrect: true },
                { text: "Yes, I does. I drink it.", isCorrect: false },
                { text: "No, I not like it. It's too bitter.", isCorrect: false },
                { text: "Yes, I liking it a lot.", isCorrect: false },
            ],
            explanation: "Para responder a 'Do you...?', se usa 'do' o 'don't'. La respuesta correcta usa el auxiliar correcto y añade contexto.",
            translation: "Pregunta: ¿Te gusta el café? / Respuesta: Sí. Bebo una taza cada mañana."
        },
        {
            id: 'la2',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Does he play tennis?',
            options: [
                { text: "No, he doesn't. He thinks it's boring.", isCorrect: true },
                { text: "No, he don't. He likes soccer more.", isCorrect: false },
                { text: "Yes, he play tennis very well.", isCorrect: false },
                { text: "No, he not plays. He is not athletic.", isCorrect: false },
            ],
            explanation: "La pregunta usa 'Does', por lo que la respuesta negativa correcta debe usar 'doesn't'.",
            translation: "Pregunta: ¿Él juega al tenis? / Respuesta: No. Piensa que es aburrido."
        },
        {
            id: 'la3',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Are they watching the movie?',
            options: [
                { text: "Yes, they are. They seem to be enjoying it.", isCorrect: true },
                { text: "Yes, they do. It's a good movie.", isCorrect: false },
                { text: "No, they is not. They are bored.", isCorrect: false },
                { text: "No, they're no watching it.", isCorrect: false },
            ],
            explanation: "La pregunta usa 'Are', por lo que la respuesta debe usar 'are' o 'aren't'.",
            translation: "Pregunta: ¿Están viendo la película? / Respuesta: Sí. Parecen estar disfrutándola."
        },
        {
            id: 'la4',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Did you finish your homework?',
            options: [
                { text: "Yes, I did. It was easier than I thought.", isCorrect: true },
                { text: "Yes, I finished. It was easy.", isCorrect: false }, // Common mistake, but "Yes, I did" is better.
                { text: "No, I not finished it yet.", isCorrect: false },
                { text: "No, I don't. I will do it later.", isCorrect: false },
            ],
            explanation: "La pregunta está en pasado con 'Did', por lo que la respuesta correcta usa el auxiliar 'did'.",
            translation: "Pregunta: ¿Terminaste tu tarea? / Respuesta: Sí. Fue más fácil de lo que pensaba."
        },
        {
            id: 'la5',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Have you ever been to Japan?',
            options: [
                { text: "No, I haven't, but I would love to go someday.", isCorrect: true },
                { text: "No, I didn't. Maybe next year.", isCorrect: false },
                { text: "Yes, I have been there last year.", isCorrect: false }, // Cannot use present perfect with specific past time.
                { text: "No, I never go to Japan.", isCorrect: false },
            ],
            explanation: "La pregunta en Presente Perfecto ('Have you...') se responde con el mismo auxiliar ('have' o 'haven't').",
            translation: "Pregunta: ¿Has estado alguna vez en Japón? / Respuesta: No, pero me encantaría ir algún día."
        },
        {
            id: 'la6',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'What are you doing this weekend?',
            options: [
                { text: "I'm going to visit my grandparents.", isCorrect: true },
                { text: "I visit my grandparents usually.", isCorrect: false },
                { text: "I will to visit my grandparents.", isCorrect: false },
                { text: "I am visit my grandparents.", isCorrect: false },
            ],
            explanation: "Para hablar de planes futuros, a menudo se usa el Presente Continuo ('I'm going to...').",
            translation: "Pregunta: ¿Qué haces este fin de semana? / Respuesta: Voy a visitar a mis abuelos."
        },
        {
            id: 'la7',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Why was she crying?',
            options: [
                { text: "Because she had lost her wallet.", isCorrect: true },
                { text: "Because she is losing her wallet.", isCorrect: false },
                { text: "She was crying because she is sad.", isCorrect: false }, // Tense mismatch
                { text: "She cries because she lost her wallet.", isCorrect: false },
            ],
            explanation: "La pregunta está en Pasado Continuo. La respuesta debe usar un tiempo pasado para explicar la razón.",
            translation: "Pregunta: ¿Por qué estaba llorando? / Respuesta: Porque había perdido su cartera."
        },
        {
            id: 'la8',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Can you help me with this box?',
            options: [
                { text: "Of course, I can. It looks heavy.", isCorrect: true },
                { text: "Yes, I can to help you.", isCorrect: false },
                { text: "No, I couldn't. I am busy.", isCorrect: false },
                { text: "Yes, help is what I do.", isCorrect: false },
            ],
            explanation: "Las preguntas con 'Can' se responden usando 'can' o 'can't'.",
            translation: "Pregunta: ¿Puedes ayudarme con esta caja? / Respuesta: Por supuesto. Parece pesada."
        },
        {
            id: 'la9',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Where did you go on holiday?',
            options: [
                { text: "We went to the mountains for a week.", isCorrect: true },
                { text: "We have gone to the mountains.", isCorrect: false },
                { text: "We did go to the mountains.", isCorrect: false },
                { text: "We were in the mountains for a week.", isCorrect: false }, // Grammatically okay, but 'went' is a more direct answer.
            ],
            explanation: "La pregunta usa 'did go', por lo que la respuesta debe usar el pasado simple del verbo, 'went'.",
            translation: "Pregunta: ¿A dónde fuiste de vacaciones? / Respuesta: Fuimos a las montañas durante una semana."
        },
        {
            id: 'la10',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Is this your book?',
            options: [
                { text: "No, it isn't. I think it's Maria's.", isCorrect: true },
                { text: "No, it's not my. It's of Maria.", isCorrect: false },
                { text: "No, this not is my book.", isCorrect: false },
                { text: "Yes, it's mine. Thank for finding it.", isCorrect: false }, // Spelling error 'Thank'
            ],
            explanation: "Se responde a 'Is it...?' con 'Yes, it is' o 'No, it isn't'.",
            translation: "Pregunta: ¿Es este tu libro? / Respuesta: No, no lo es. Creo que es de María."
        },
        {
            id: 'la11',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: "What does your father do?",
            options: [
                { text: "He's an engineer at a large company.", isCorrect: true },
                { text: "He's doing his work right now.", isCorrect: false },
                { text: "He does his job very well.", isCorrect: false },
                { text: "He is engineer.", isCorrect: false }, // Missing 'an'
            ],
            explanation: "Esta pregunta se refiere a la profesión. La respuesta correcta describe su trabajo.",
            translation: "Pregunta: ¿A qué se dedica tu padre? / Respuesta: Es ingeniero en una gran empresa."
        },
        {
            id: 'la12',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: "She has already left, hasn't she?",
            options: [
                { text: "Yes, she has. She left about 10 minutes ago.", isCorrect: true },
                { text: "Yes, she did. She left early.", isCorrect: false },
                { text: "No, she hasn't left. She is still here.", isCorrect: false }, // Also a valid answer, but the question implies confirmation. Let's make the positive one the answer.
                { text: "No, she didn't. She is coming back.", isCorrect: false },
            ],
            explanation: "Las 'tag questions' se confirman o niegan usando el mismo auxiliar. 'hasn't she?' se responde con 'Yes, she has.' o 'No, she hasn't.'",
            translation: "Pregunta: Ella ya se ha ido, ¿verdad? / Respuesta: Sí. Se fue hace unos 10 minutos."
        },
        {
            id: 'la13',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'Whose keys are these?',
            options: [
                { text: "They are mine. Thank you!", isCorrect: true },
                { text: "They are from me. Thanks.", isCorrect: false },
                { text: "It's my keys. Thank you.", isCorrect: false },
                { text: "This keys are mine. Thank you.", isCorrect: false },
            ],
            explanation: "Para indicar posesión, se usan los pronombres posesivos como 'mine', 'yours', 'his', 'hers'.",
            translation: "Pregunta: ¿De quién son estas llaves? / Respuesta: Son mías. ¡Gracias!"
        },
        {
            id: 'la14',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'How long have you been waiting?',
            options: [
                { text: "I've been waiting for about an hour.", isCorrect: true },
                { text: "I am waiting since one hour.", isCorrect: false },
                { text: "I waited for an hour.", isCorrect: false },
                { text: "I wait here for about an hour.", isCorrect: false },
            ],
            explanation: "La pregunta usa Presente Perfecto Continuo, por lo que la respuesta debe usar el mismo tiempo verbal para indicar la duración.",
            translation: "Pregunta: ¿Cuánto tiempo llevas esperando? / Respuesta: Llevo esperando cerca de una hora."
        },
        {
            id: 'la15',
            type: QuestionType.MULTIPLE_CHOICE,
            form: 'Mixed',
            sentence: 'You didn\'t go to the meeting, did you?',
            options: [
                { text: "No, I didn't. I had another appointment.", isCorrect: true },
                { text: "No, I don't. I was busy.", isCorrect: false },
                { text: "Yes, I did. I arrived a bit late.", isCorrect: false }, // Also possible, but let's stick to one correct option.
                { text: "Yes, I didn't. I was sick.", isCorrect: false },
            ],
            explanation: "Se responde a la 'tag question' basándose en la realidad. Si no fuiste, dices 'No, I didn't'.",
            translation: "Pregunta: No fuiste a la reunión, ¿verdad? / Respuesta: No, no fui. Tenía otra cita."
        },
        { id: 'la16', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Does the shop open on Sundays?', options: [ { text: "No, it doesn't. It opens from Monday to Saturday.", isCorrect: true }, { text: "No, it don't open on Sundays.", isCorrect: false }, { text: "Yes, it is open. You can go.", isCorrect: false }, { text: "No, it not open. It is closed.", isCorrect: false } ], explanation: "La pregunta con 'Does' para 'it' se responde con 'doesn't'.", translation: "Pregunta: ¿Abre la tienda los domingos? / Respuesta: No. Abre de lunes a sábado." },
        { id: 'la17', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Is it going to rain tomorrow?', options: [ { text: "I think so. The forecast said there's a high chance.", isCorrect: true }, { text: "Yes, it will to rain tomorrow.", isCorrect: false }, { text: "No, it not going to rain.", isCorrect: false }, { text: "Maybe it rain. I don't know.", isCorrect: false } ], explanation: "Se puede responder a una pregunta sobre el futuro con 'I think so' o dando más información.", translation: "Pregunta: ¿Va a llover mañana? / Respuesta: Creo que sí. El pronóstico dijo que hay una alta probabilidad." },
        { id: 'la18', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'What time did you get home last night?', options: [ { text: "I got home around midnight.", isCorrect: true }, { text: "I get home at midnight.", isCorrect: false }, { text: "I did get home around midnight.", isCorrect: false }, { text: "I have gotten home around midnight.", isCorrect: false } ], explanation: "La pregunta en Pasado Simple se responde con un verbo en Pasado Simple ('got').", translation: "Pregunta: ¿A qué hora llegaste a casa anoche? / Respuesta: Llegué a casa sobre la medianoche." },
        { id: 'la19', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Would you like another drink?', options: [ { text: "No, thank you. I'm fine for now.", isCorrect: true }, { text: "Yes, I would to like another.", isCorrect: false }, { text: "No, I wouldn't. I have enough.", isCorrect: false }, // Awkward phrasing
            { text: "Yes, please. I will have a water.", isCorrect: false } ], explanation: "Una oferta con 'Would you like...?' se puede aceptar con 'Yes, please.' o rechazar cortésmente con 'No, thank you.'.", translation: "Pregunta: ¿Te gustaría otra bebida? / Respuesta: No, gracias. Estoy bien por ahora." },
        { id: 'la20', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Has she fed the dog yet?', options: [ { text: "Yes, she has. She fed him an hour ago.", isCorrect: true }, { text: "Yes, she did. He is happy now.", isCorrect: false }, { text: "No, she not fed him.", isCorrect: false }, { text: "No, she haves not. He is hungry.", isCorrect: false } ], explanation: "La pregunta en Presente Perfecto con 'Has' se responde con el mismo auxiliar.", translation: "Pregunta: ¿Ya le ha dado de comer al perro? / Respuesta: Sí. Le dio de comer hace una hora." },
        { id: 'la21', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Where were you yesterday?', options: [ { text: "I was at work all day.", isCorrect: true }, { text: "I am at work.", isCorrect: false }, { text: "I were at work all day.", isCorrect: false }, { text: "I did be at work.", isCorrect: false } ], explanation: "A la pregunta con 'were you...?', se responde con 'I was...'.", translation: "Pregunta: ¿Dónde estuviste ayer? / Respuesta: Estuve en el trabajo todo el día." },
        { id: 'la22', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "You're a teacher, aren't you?", options: [ { text: "Yes, that's right. I teach history.", isCorrect: true }, { text: "Yes, I'm. I am a teacher.", isCorrect: false }, { text: "No, you aren't. I am a doctor.", isCorrect: false }, { text: "No, I am not teacher.", isCorrect: false } ], explanation: "Se responde a la 'tag question' confirmando la información con 'Yes, that's right' o 'Yes, I am'.", translation: "Pregunta: Eres profesor, ¿no? / Respuesta: Sí, correcto. Enseño historia." },
        { id: 'la23', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'How often do you go to the cinema?', options: [ { text: "Not very often. Maybe once a month.", isCorrect: true }, { text: "I go sometimes. I like movies.", isCorrect: false }, // Vague
            { text: "I am going to the cinema tomorrow.", isCorrect: false }, { text: "I have gone twice this year.", isCorrect: false } ], explanation: "'How often' pregunta por la frecuencia. Se responde con adverbios de frecuencia como 'once a month'.", translation: "Pregunta: ¿Con qué frecuencia vas al cine? / Respuesta: No muy a menudo. Quizás una vez al mes." },
        { id: 'la24', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Did it rain during the night?', options: [ { text: "Yes, it did. The ground is still wet.", isCorrect: true }, { text: "Yes, it was raining. The ground is wet.", isCorrect: false }, { text: "No, it not rained.", isCorrect: false }, { text: "No, it doesn't. The sky is clear now.", isCorrect: false } ], explanation: "La pregunta en Pasado Simple con 'Did' se responde con el mismo auxiliar.", translation: "Pregunta: ¿Llovió durante la noche? / Respuesta: Sí. El suelo todavía está húmedo." },
        { id: 'la25', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'What kind of music do you like?', options: [ { text: "I mostly listen to rock and pop.", isCorrect: true }, { text: "I am liking rock music.", isCorrect: false }, { text: "The music I like is good.", isCorrect: false }, { text: "I do like rock and pop music.", isCorrect: false } ], explanation: "Esta pregunta pide una preferencia. La respuesta directa nombra los géneros musicales.", translation: "Pregunta: ¿Qué tipo de música te gusta? / Respuesta: Escucho sobre todo rock y pop." },
        { id: 'la26', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "Why haven't you started yet?", options: [ { text: "Because I'm still waiting for the instructions.", isCorrect: true }, { text: "Because I not start yet.", isCorrect: false }, { text: "I will start soon, don't worry.", isCorrect: false }, // Doesn't answer 'Why'
            { text: "Because I didn't received the instructions.", isCorrect: false } ], explanation: "Una pregunta con 'Why' se responde con 'Because...'. El tiempo verbal debe ser coherente.", translation: "Pregunta: ¿Por qué no has empezado todavía? / Respuesta: Porque todavía estoy esperando las instrucciones." },
        { id: 'la27', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Do you know where the station is?', options: [ { text: "Yes, it's just down this street, on the left.", isCorrect: true }, { text: "Yes, I know. It is there.", isCorrect: false }, { text: "No, I don't know where is the station.", isCorrect: false }, // Incorrect word order
            { text: "Yes, I knowing. It's close.", isCorrect: false } ], explanation: "La respuesta correcta no solo confirma, sino que también proporciona la información solicitada de manera clara.", translation: "Pregunta: ¿Sabes dónde está la estación? / Respuesta: Sí, está al final de esta calle, a la izquierda." },
        { id: 'la28', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Have they replied to your email?', options: [ { text: "No, they haven't. I'm still waiting.", isCorrect: true }, { text: "No, they didn't. I wait.", isCorrect: false }, { text: "Yes, they have replied me yesterday.", isCorrect: false }, // Tense error
            { text: "Not yet. I hope they reply me soon.", isCorrect: false } ], explanation: "La pregunta en Presente Perfecto se responde con el mismo auxiliar ('haven't').", translation: "Pregunta: ¿Han respondido a tu correo? / Respuesta: No. Todavía estoy esperando." },
        { id: 'la29', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "I'm really tired today.", options: [ { text: "You should get some rest then.", isCorrect: true }, { text: "Why you are tired?", isCorrect: false }, { text: "You must to sleep more.", isCorrect: false }, { text: "I am not tired. I am full of energy.", isCorrect: false } ], explanation: "Una respuesta empática y que ofrece un consejo ('You should...') es una reacción natural y correcta.", translation: "Enunciado: Estoy muy cansado hoy. / Respuesta: Deberías descansar un poco entonces." },
        { id: 'la30', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Could you speak more slowly, please?', options: [ { text: "Of course. Is this pace better for you?", isCorrect: true }, { text: "No, I couldn't. This is my normal speed.", isCorrect: false }, { text: "Yes, I can to speak slowly.", isCorrect: false }, { text: "Why? You not understand me?", isCorrect: false } ], explanation: "Una respuesta afirmativa y educada a una petición con 'Could' es 'Of course' o 'Certainly'.", translation: "Pregunta: ¿Podría hablar más despacio, por favor? / Respuesta: Por supuesto. ¿Este ritmo es mejor para ti?" },
        { id: 'la31', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Whose jacket is this?', options: [ { text: "I think it's Tom's. He was wearing a similar one.", isCorrect: true }, { text: "It's a jacket of Tom.", isCorrect: false }, { text: "This jacket is of Tom.", isCorrect: false }, { text: "I don't know whose is it.", isCorrect: false } ], explanation: "Para indicar posesión, se usa el genitivo sajón ('Tom's').", translation: "Pregunta: ¿De quién es esta chaqueta? / Respuesta: Creo que es de Tom. Llevaba una parecida." },
        { id: 'la32', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "You speak English very well.", options: [ { text: "Thank you. I've been learning for five years.", isCorrect: true }, { text: "Yes, I speak it good.", isCorrect: false }, { text: "Thanks. I am learning it since five years.", isCorrect: false }, { text: "I know. It's because I'm smart.", isCorrect: false } ], explanation: "La respuesta educada a un cumplido es 'Thank you', y a menudo se añade información adicional.", translation: "Enunciado: Hablas inglés muy bien. / Respuesta: Gracias. Llevo cinco años aprendiendo." },
        { id: 'la33', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "What's the weather like?", options: [ { text: "It's sunny but a bit windy.", isCorrect: true }, { text: "The weather is like good.", isCorrect: false }, { text: "It's like hot and sunny.", isCorrect: false }, { text: "I like the weather. It's fine.", isCorrect: false } ], explanation: "La pregunta 'What's the weather like?' pide una descripción del tiempo.", translation: "Pregunta: ¿Qué tiempo hace? / Respuesta: Hace sol pero un poco de viento." },
        { id: 'la34', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "I passed my exam!", options: [ { text: "Congratulations! I knew you could do it.", isCorrect: true }, { text: "Good job. The exam was difficult?", isCorrect: false }, { text: "Congratulation! That's a good new.", isCorrect: false }, { text: "Well done. I passed it too.", isCorrect: false } ], explanation: "La respuesta apropiada a una buena noticia es una felicitación como 'Congratulations!' o 'Well done!'.", translation: "Enunciado: ¡Aprobé mi examen! / Respuesta: ¡Felicidades! Sabía que podías hacerlo." },
        { id: 'la35', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Are you ready to order?', options: [ { text: "Yes, I am. I'll have the chicken salad, please.", isCorrect: true }, { text: "Not yet. I want to see the menu.", isCorrect: false }, { text: "Yes, I'm ready. I will to have the salad.", isCorrect: false }, { text: "I order now. I want chicken.", isCorrect: false } ], explanation: "Una respuesta directa y educada en un restaurante, usando 'I'll have...' para pedir.", translation: "Pregunta: ¿Está listo para pedir? / Respuesta: Sí. Tomaré la ensalada de pollo, por favor." },
        { id: 'la36', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "He's never on time, is he?", options: [ { text: "No, he isn't. He's always late.", isCorrect: true }, { text: "No, he is. He comes late.", isCorrect: false }, { text: "Yes, he is never on time.", isCorrect: false }, { text: "Yes, he isn't. He's late.", isCorrect: false } ], explanation: "La 'tag question' confirma una idea negativa. Se responde con 'No, he isn't' para estar de acuerdo.", translation: "Pregunta: Él nunca llega a tiempo, ¿verdad? / Respuesta: No. Siempre llega tarde." },
        { id: 'la37', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "I'm sorry, I'm late.", options: [ { text: "Don't worry about it. We just started.", isCorrect: true }, { text: "It's okay. Why you are late?", isCorrect: false }, { text: "No problem. You must come earlier.", isCorrect: false }, { text: "You are welcome. Please sit down.", isCorrect: false } ], explanation: "Una respuesta tranquilizadora como 'Don't worry' o 'No problem' es la forma educada de aceptar una disculpa.", translation: "Enunciado: Siento llegar tarde. / Respuesta: No te preocupes. Acabamos de empezar." },
        { id: 'la38', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "What does this word mean?", options: [ { text: "I'm not sure. You should look it up in a dictionary.", isCorrect: true }, { text: "It means... I can't to explain.", isCorrect: false }, { text: "This word has a meaning. I don't know it.", isCorrect: false }, { text: "I not know the meaning of this word.", isCorrect: false } ], explanation: "Si no sabes la respuesta, es correcto decirlo y sugerir una solución, como usar un diccionario.", translation: "Pregunta: ¿Qué significa esta palabra? / Respuesta: No estoy seguro. Deberías buscarla en un diccionario." },
        { id: 'la39', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "Have a good weekend!", options: [ { text: "Thanks, you too!", isCorrect: true }, { text: "Yes, I will have a good weekend.", isCorrect: false }, { text: "Thank you. For you too.", isCorrect: false }, { text: "The same for you. Thanks.", isCorrect: false } ], explanation: "La respuesta estándar y educada a 'Have a good weekend' es 'You too' o 'Thanks, you too'.", translation: "Enunciado: ¡Que tengas un buen fin de semana! / Respuesta: ¡Gracias, tú también!" },
        { id: 'la40', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'Should we leave now?', options: [ { text: "Yes, we should. It's getting late.", isCorrect: true }, { text: "No, we shouldn't to leave.", isCorrect: false }, { text: "Yes, we must leaving now.", isCorrect: false }, { text: "I don't know if we should.", isCorrect: false } ], explanation: "La pregunta con el modal 'Should' se responde lógicamente con 'should' o 'shouldn't'.", translation: "Pregunta: ¿Deberíamos irnos ya? / Respuesta: Sí. Se está haciendo tarde." },
        { id: 'la41', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "Don't forget to buy milk.", options: [ { text: "Okay, I won't. I'll add it to the list.", isCorrect: true }, { text: "Yes, I don't forget.", isCorrect: false }, { text: "Okay, I will to remember.", isCorrect: false }, { text: "I not forget. Don't worry.", isCorrect: false } ], explanation: "Una forma natural de responder a un recordatorio es 'Okay, I won't' (forget).", translation: "Enunciado: No te olvides de comprar leche. / Respuesta: Vale, no lo haré. Lo añadiré a la lista." },
        { id: 'la42', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'How was your trip?', options: [ { text: "It was amazing! We had a great time.", isCorrect: true }, { text: "The trip was good. I like it.", isCorrect: false }, { text: "It has been amazing. We have fun.", isCorrect: false }, { text: "Was great! We have had a great time.", isCorrect: false } ], explanation: "Se pregunta por un evento pasado ('was'), por lo que la respuesta debe estar en Pasado Simple.", translation: "Pregunta: ¿Qué tal tu viaje? / Respuesta: ¡Fue increíble! Lo pasamos genial." },
        { id: 'la43', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "Is there anything else I can help you with?", options: [ { text: "No, that's all for now. Thank you.", isCorrect: true }, { text: "No, it's not anything else.", isCorrect: false }, { text: "Yes, help me with my bags.", isCorrect: false }, // Demasiado directo
            { text: "No, I am not needing more help.", isCorrect: false } ], explanation: "Una respuesta educada y común para finalizar una interacción de servicio.", translation: "Pregunta: ¿Puedo ayudarte en algo más? / Respuesta: No, eso es todo por ahora. Gracias." },
        { id: 'la44', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: 'What happened?', options: [ { text: "There was an accident, but nobody was hurt.", isCorrect: true }, { text: "An accident is happened.", isCorrect: false }, { text: "It happened an accident.", isCorrect: false }, { text: "What happened was an accident.", isCorrect: false } ], explanation: "Para describir un evento pasado, se usa la estructura 'There was/were...'.", translation: "Pregunta: ¿Qué pasó? / Respuesta: Hubo un accidente, pero nadie resultó herido." },
        { id: 'la45', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "This is my friend, David.", options: [ { text: "Nice to meet you, David.", isCorrect: true }, { text: "I am pleased to meet David.", isCorrect: false }, { text: "Hello, my name is... Nice to know you.", isCorrect: false }, { text: "A pleasure, David. How is it going?", isCorrect: false } ], explanation: "La respuesta estándar al ser presentado a alguien es 'Nice to meet you'.", translation: "Enunciado: Este es mi amigo, David. / Respuesta: Encantado de conocerte, David." },
        { id: 'la46', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "Could you tell me the time, please?", options: [ { text: "Certainly. It's half past ten.", isCorrect: true }, { text: "Yes, I can. The time is 10:30.", isCorrect: false }, { text: "Of course. It's the ten and a half.", isCorrect: false }, { text: "The time is half past ten now.", isCorrect: false } ], explanation: "'Certainly' es una forma educada de aceptar una petición. 'Half past ten' es una forma común de decir la hora.", translation: "Pregunta: ¿Podría decirme la hora, por favor? / Respuesta: Por supuesto. Son las diez y media." },
        { id: 'la47', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "I don't understand this.", options: [ { text: "Let me try to explain it in a different way.", isCorrect: true }, { text: "Why you don't understand?", isCorrect: false }, { text: "This is not so difficult to understand.", isCorrect: false }, { text: "You must to pay more attention.", isCorrect: false } ], explanation: "Una respuesta útil y colaborativa es ofrecerse a explicar de nuevo.", translation: "Enunciado: No entiendo esto. / Respuesta: Déjame intentar explicarlo de otra manera." },
        { id: 'la48', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "What are you looking for?", options: [ { text: "I'm looking for my glasses. I can't find them.", isCorrect: true }, { text: "I look for my glasses. Where are they?", isCorrect: false }, { text: "I am look for my glasses.", isCorrect: false }, { text: "My glasses is what I am looking for.", isCorrect: false } ], explanation: "La pregunta en Presente Continuo se responde con el mismo tiempo verbal.", translation: "Pregunta: ¿Qué estás buscando? / Respuesta: Estoy buscando mis gafas. No las encuentro." },
        { id: 'la49', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "How much did your ticket cost?", options: [ { text: "It cost about 50 euros.", isCorrect: true }, { text: "It costs 50 euros.", isCorrect: false }, { text: "It did cost 50 euros.", isCorrect: false }, { text: "The cost was of 50 euros.", isCorrect: false } ], explanation: "La pregunta en pasado con 'did' requiere una respuesta con el verbo en pasado ('cost' es irregular y no cambia).", translation: "Pregunta: ¿Cuánto costó tu billete? / Respuesta: Costó unos 50 euros." },
        { id: 'la50', type: QuestionType.MULTIPLE_CHOICE, form: 'Mixed', sentence: "May I use your phone?", options: [ { text: "Sure, go ahead.", isCorrect: true }, { text: "Yes, you may. Here it is.", isCorrect: false }, { text: "No, you may not. It's mine.", isCorrect: false }, { text: "Yes, you can to use it.", isCorrect: false } ], explanation: "'Sure, go ahead' es una forma informal y común de dar permiso.", translation: "Pregunta: ¿Puedo usar tu teléfono? / Respuesta: Claro, adelante." }
    ] as Question[],
  },
];
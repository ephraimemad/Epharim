
import { Service, Project, ContentStrategy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'custom-ml',
    title: 'Custom Machine Learning Models',
    problem: 'Businesses often struggle with standard software that cannot adapt to complex, non-linear patterns in their data.',
    target: 'Growth-stage startups and enterprises looking for predictive insights.',
    description: 'Developing tailored classification, regression, and clustering models to optimize internal processes and predictive accuracy.'
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    problem: 'Repetitive manual tasks consume hundreds of hours and increase the risk of human error.',
    target: 'Operations managers and founders seeking to scale without increasing headcount.',
    description: 'Integrating LLMs and custom scripts to automate data entry, document analysis, and decision-making pipelines.'
  },
  {
    id: 'nlp-chatbots',
    title: 'NLP & Intelligent Chatbots',
    problem: 'Generic customer support bots fail to understand context, leading to user frustration and high churn.',
    target: 'SaaS companies and e-commerce brands prioritizing customer experience.',
    description: 'Building context-aware, RAG-based (Retrieval-Augmented Generation) assistants that provide accurate, human-like responses.'
  },
  {
    id: 'recommendation-systems',
    title: 'Recommendation Engines',
    problem: 'Information overload prevents users from finding relevant content, reducing engagement and revenue.',
    target: 'Content platforms, marketplaces, and subscription services.',
    description: 'Implementing collaborative and content-based filtering algorithms to personalize user experiences and increase retention.'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    problem: 'Manual visual inspection is slow, inconsistent, and expensive for high-volume operations.',
    target: 'Manufacturing, healthcare, and security sectors.',
    description: 'Deploying object detection, image segmentation, and facial recognition models to automate visual monitoring and analysis.'
  },
  {
    id: 'ai-saas',
    title: 'AI SaaS Product Development',
    problem: 'Founders have great AI ideas but lack the technical expertise to build a robust, scalable MVP.',
    target: 'Non-technical founders and early-stage entrepreneurs.',
    description: 'Full-stack development of AI-centric applications, from model fine-tuning to API integration and backend scaling.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Enterprise Classification Pipeline',
    problem: 'High volume of unstructured customer data led to inefficient lead prioritization.',
    approach: 'Implemented a multi-class Random Forest and XGBoost ensemble to categorize leads based on historical behavior and engagement metadata.',
    tools: ['Scikit-learn', 'Pandas', 'NumPy', 'Python'],
    value: 'Demonstrates ability to handle real-world data noise and deliver measurable prioritization logic.'
  },
  {
    id: '2',
    title: 'Context-Aware NLP Chatbot',
    problem: 'Standard support bots could not answer technical questions about specific product documentation.',
    approach: 'Leveraged LangChain and OpenAI APIs to build a RAG-based system that queries a vector database of product manuals.',
    tools: ['GPT APIs', 'FastAPI', 'Pinecone', 'Python'],
    value: 'Shows expertise in modern LLM architectures and vector-based information retrieval.'
  },
  {
    id: '3',
    title: 'Personalized Recommendation Engine',
    problem: 'E-commerce users were dropping off due to irrelevant product suggestions.',
    approach: 'Developed a hybrid recommendation system combining Singular Value Decomposition (SVD) and content metadata.',
    tools: ['Scikit-learn', 'TensorFlow', 'Pandas'],
    value: 'Illustrates proficiency in user-behavior modeling and matrix factorization techniques.'
  },
  {
    id: '4',
    title: 'AI-Powered Content SaaS',
    problem: 'Content creators spend hours manually summarizing long-form video content.',
    approach: 'Built a web application that extracts audio, transcribes it using Whisper, and generates SEO-optimized summaries via LLMs.',
    tools: ['FastAPI', 'PyTorch', 'React', 'GPT-4'],
    value: 'Proves capability to build end-to-end AI products with complex multimodal pipelines.'
  },
  {
    id: '5',
    title: 'Real-Time Object Detection System',
    problem: 'Inventory management in warehouses suffered from frequent manual count errors.',
    approach: 'Fine-tuned a YOLO (You Only Look Once) model on custom warehouse imagery for real-time stock monitoring.',
    tools: ['Computer Vision', 'PyTorch', 'OpenCV'],
    value: 'Highlights skills in deep learning, model fine-tuning, and low-latency computer vision applications.'
  },
  {
    id: '6',
    title: 'Autonomous LLM Research Assistant',
    problem: 'Researchers spend excessive time synthesizing disparate papers and datasets.',
    approach: 'Engineered an agentic workflow that uses search tools and LLMs to cross-reference academic sources.',
    tools: ['Python', 'LLMs', 'Prompt Engineering'],
    value: 'Demonstrates advanced prompt engineering and agentic reasoning capabilities.'
  }
];

export const CONTENT_STRATEGIES: ContentStrategy[] = [
  {
    platform: 'YouTube',
    strategy: 'Long-form deep dives into specific AI projects, explaining the "why" behind the code.',
    value: 'Establishes technical authority and proves the ability to explain complex concepts to diverse audiences.'
  },
  {
    platform: 'Short-Form (Reels/TikTok)',
    strategy: 'Rapid AI tool reviews and 60-second "How-To" tutorials for common ML tasks.',
    value: 'Maintains top-of-mind awareness and showcases a finger on the pulse of the fast-moving AI landscape.'
  },
  {
    platform: 'LinkedIn',
    strategy: 'Educational posts focusing on the business ROI of AI and high-level strategy for non-technical founders.',
    value: 'Positions me as a strategic partner who understands both the code and the bottom line.'
  }
];

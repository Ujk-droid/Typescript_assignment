
// TypeScript code
const allah = "Allah";
const itTeacher = "Sir Zia";
const governor = "Sir Kamran Khan Tessori";

function generateThankMessage(entity1: string, entity2: string): string {
    return `Alhamdulillah for blessing us with ${entity1} as our IT teacher and ${entity2} as a good Governor of Sindh. We are greatful for their guidance and leadership.`;
}

const thankMessage = generateThankMessage(itTeacher, governor);
console.log(thankMessage);

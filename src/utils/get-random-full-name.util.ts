const fullNames: string[] = [
    'Иван Иванов',
    'Петр Петров',
    'Сергей Сергеев',
    'Михаил Михайлов',
    'Александр Александров',
    'Дмитрий Дмитриев',
    'Андрей Андреев',
    'Николай Николаев',
    'Владимир Владимиров',
    'Алексей Алексеев',
];

export function getRandomFullName(): string {
	const randomIndex = Math.floor(Math.random() * fullNames.length)
	return fullNames[randomIndex]
}

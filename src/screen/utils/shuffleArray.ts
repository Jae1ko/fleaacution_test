function shuffleArray(array: any) {
    return array.slice().sort(() => Math.random() - 0.5);
}

export { shuffleArray };

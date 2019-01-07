exports.centerRank = (r1, r2) => {
    const rank = ((r1 + r2) / 2).toFixed();

    if (rank == r1 || rank == r2) {
        return false;
    }

    return rank;
}

exports.abvName = user => `${user.firstName} ${user.lastName[0].toUpperCase()}.`;

exports.userInitials = user => user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();

exports.centerRank = (r1, r2) => {
    const rank = ((r1 + r2) / 2).toFixed();

    if (rank == r1 || rank == r2) {
        return false;
    }

    return rank;
}

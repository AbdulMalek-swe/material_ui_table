export const handleSelectedClick = async (id: number, selected: any) => {
    console.log(event);
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
        );
    }
    return newSelected;

};
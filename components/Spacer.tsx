export default function spacer({ hgt, wid }: { hgt: string, wid: string}) {
    return (
        <div style={{
            height: hgt,
            width: wid,
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0)"
        }}></div>
    );
}
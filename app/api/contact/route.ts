import * as console from "console";
import {NextResponse} from "next/server";
import {mailOptions, transporter} from "@/config/nodemailer";

export async function POST(request: Request, response: Response) {

    const body = await request.json()

    if (request.method === 'POST') {
        const {name, email, phone, msg} = body
        if (!name || !email || !phone || !msg) {
            return NextResponse.json({message: 'bad req', status: 'error'}, {status: 400})
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: email,
                text: 'Wycena',
                html: `<h1>Wiadomość od ${name} - wycena</h1>
                <p>email: ${email}</p>
                <p>phone: ${phone}</p>
                <p>msg: ${msg}</p>
`
            })
            console.log('sent')
            return NextResponse.json({message: 'success mail', status: 'success'}, {status: 200})
        } catch (error) {

            console.log(error)
            // @ts-ignore
            return NextResponse.json({message: error?.message, status: 'error'}, {status: 500})
        }
    }


    return NextResponse.json({body})
}

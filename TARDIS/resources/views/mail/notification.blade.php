<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{{ config('app.name') }}</title>
        <style>
            dd { margin: 0; padding: 0 0 15px; }
            dt { font-weight: bold; }
            h1 { color: #666; font-size: 12pt; font-weight: 300; margin-bottom: 0; }
            h2 { color: #444; font-size: 14pt; margin-top: 5px; }
            h2 ~ p { color: #444; }
            img {width: 100px;height: 100px;}
            h3 { border-bottom: 2px solid #666; color: #444; font-size: 12pt; padding-bottom: 5px; padding-top: 20px; }
        </style>
        </head>
        <body style="background: #dddddd;">
            <div style="background: #dddddd; display: inline-block; overflow: hidden; padding: 20px 0; width: 100%;">
                <table width="600" style="background: #ffffff; border-collapse: collapse; clear:both; font-family: Arial; font-size: 14px; margin: 0 auto;">
                    <tr style="background: #dddddd;">
                        <td valign="top" width="600" style="padding: 15px 0;"></td>
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                        <td valign="top" width="600" style="background: #ffffff; border-left: 1px solid #dddddd; border-right: 1px solid #dddddd; line-height: 20px; padding: 30px 100px;">
                           
                            <h1>Sistema de prazos </h1>
                            <h2>{{ config('app.name') }} <br>Informar vencimento de prazo</h2>
                            <dl><dt>O contrato com a empresa : {{$registro->company_name}}</dt>
                            <dd>Esta <strong>Proximo de expiração</strong>.</dd></dl>
                            <h3>Dados Gerais</h3><dl><dt>ID</dt><dd>{{$registro->id}}</dd><dt>Data final:</dt><dd>{{$registro->validity}}</dd><dt>SERIAL</dt><dd>{{$registro->serial_contract}}</dd><p>--</p></p>
                            <dt>Faltam </dt><dd>{{$comparativo ?? ''}} dias para o vencimento </dd>
                        </td>
                    </tr>
                     <tr>
                        <td valign="top" width="600" style="background: #ffffff; border-bottom: 1px solid #dddddd; border-left: 1px solid #dddddd; border-right: 1px solid #dddddd; line-height: 14px; padding: 0 100px 60px; text-align: right;">
                            <p>Atenciosamente,</p>
                            <p><a href="#" style="color: #182170; padding: 10px 0 0; text-align: right; text-decoration: none;">sures-cronos</a></p>
                        </td>
                    </tr>
                    <tr style="background: #dddddd;">
                        <td valign="top" width="600">
                            <p style="color: #888888; font-size: 9pt; line-height: 18px; margin: 0; padding: 20px 100px; text-align: center; width: 400px;">Dúvidas? Entre em contato com o Setor responsável por esta notificação.</p>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
        </html>
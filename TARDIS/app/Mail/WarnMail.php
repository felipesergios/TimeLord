<?php

namespace App\Mail;
use App\Models\Contract;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WarnMail extends Mailable
{
    use Queueable, SerializesModels;
    public $archive;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Contract $archive,$interval)
    {
        $this->archive = $archive;
        $this->interval = $interval->days;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        //return $this->view('view.name');
        return $this->to('felipe@cotic.rn.gov.br')
        ->subject ('Aviso de contrato')
        ->view('mail.notification')
        ->with([
            'registro' => $this->archive,
            'comparativo'=> $this->interval
        ]);;
    }
}
